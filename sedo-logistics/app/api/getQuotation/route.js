'use server'

import { NextResponse } from 'next/server';
import connectToDatabase from '../../../libs/connectDB';
// import userSchema from '../../../models/user';
// import {createOrUpdateUser} from '../../../libs/actions/createUpdateUser';
import { currentUser} from '@clerk/nextjs/server'
import User from '../../../models/user';
import quotationSchema from '@/models/quotations';

export async function POST(Request){
    // Ensure user is authenticated
    const clerkData = await currentUser();
    if (!clerkData) {
        return new NextResponse("User not authenticated", { status: 401 });
    }
    const user = await User.findOne({ userid: clerkData.id });
    if (!user) {
        return new NextResponse("User is not in the database: " + JSON.stringify(clerkData), { status: 404 });
    }
    const userID = user._id;
    const quotationData = await Request.json();
    if (
        !userID ||
        !quotationData.consignee ||
        !quotationData.shipmentInfo ||
        !quotationData.quotationItems
    ) {
        return new NextResponse("Quotation data is required", { status: 400 });
    }
    try {
        await connectToDatabase();
        const existingQuotations = await quotationSchema.find({ 'userId': userID });
        if(existingQuotations){
            return new NextResponse(JSON.stringify(existingQuotations), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        const quotation = await quotationSchema.findOneAndUpdate(
            { 'shipmentInfo.ref': quotationData.shipmentInfo.ref },
            { $set: { userId: userID, ...quotationData } },
            { upsert: true, new: true }
        );
        return new NextResponse(JSON.stringify(quotation), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        return new NextResponse(`Internal Server Error: ${error.message}`, { status: 500 });
    }
}
