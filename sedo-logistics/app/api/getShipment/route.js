import { NextResponse } from 'next/server';
import connectToDatabase from '../../../libs/connectDB';
// import userSchema from '../../../models/user';
// import {createOrUpdateUser} from '../../../libs/actions/createUpdateUser';
import { currentUser} from '@clerk/nextjs/server'
import User from '../../../models/user';
import shipmentSchema from '../../../models/shipment';
// import mongoose from 'mongoose';
export async function GET() {
    //ensure user is authenticated
    await connectToDatabase();

    // const clerkData = await currentUser();
    // if (!clerkData) {
    //     return new NextResponse("User not authenticated", { status: 401 });
    // }
    const userID = "63e4a1f5e621b5c2e334ae76";
    try {
        const shipments = await shipmentSchema.find({userId:userID})
        console.log("shipment for user : "+  shipments)
        if (JSON.stringify(shipments) !== '[]') {
            return new NextResponse(JSON.stringify(shipments), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },})

        }
        return new NextResponse("No shipments found", { status: 404 });

        
    } catch (error) {
        console.error("Error fetching user:", error);
        return new NextResponse(`Internal Server Error: ${error.message}`, { status: 500 });
    }

}

export async function POST(Request) {
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

    const ShipmentData = await Request.json();
    if (
        !userID ||
        !ShipmentData.consignee ||
        !ShipmentData.shipmentInfo ||
        !ShipmentData.goodsInfo ||
        !ShipmentData.documents ||
        !ShipmentData.progress
    ) {
        return new NextResponse("Shipment data is required", { status: 400 });
    }

    try {
        await connectToDatabase();

        // Create the shipment and retrieve its data
        const createdShipment = await shipmentSchema.create({
            userId: userID,
            ...ShipmentData,
            createdAt: new Date(),
        });

        // Update the user document with the shipment ID
        await User.findByIdAndUpdate(
            { _id: userID },
            { $push: { shipments: createdShipment._id } }
        );

        return new NextResponse("Shipment created successfully", { status: 200 });
    } catch (error) {
        console.error("Error creating shipment:", error);
        return new NextResponse("Error creating shipment: " + error, { status: 500 });
    }
}

