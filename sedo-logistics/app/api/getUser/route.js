import { NextResponse } from 'next/server';
import connectToDatabase from '../../../libs/connectDB';
import userSchema from '../../../models/user';
import {createOrUpdateUser} from '../../../libs/actions/createUpdate';
import { currentUser} from '@clerk/nextjs/server'
export async function GET(Response) {
    const clerkdata = await currentUser();
    if (!clerkdata) {
        return new NextResponse("User not authenticated", { status: 401 });
    }
    // console.log("clerkdata : "+ JSON.stringify(clerkdata));

    const { id, firstName, lastName, emailAddresses } = clerkdata;
    const email = emailAddresses[0].emailAddress;
    const { searchParams } = new URL(Response.url);
    const userId = searchParams.get('userId');

    console.log("Received userId:", userId);

    try {
        // Connect to the database
        await connectToDatabase();

        // Extract query parameters from the URL

        if (!userId) {
            return new NextResponse("Missing userId in query parameters", { status: 400 });
        }

        // Fetch user based on userid
        const user = await userSchema.findOne({ userid: userId });

        if (!user) {
            console.log("User not found");
            console.log("Creating user");
            const user = await createOrUpdateUser({
                email,
                id,
                firstName,
                lastName,
                createdAt: new Date(),
                PhoneNumber: null,
                companyName: null,
                shipment:null,
            });
            console.log("User created:", JSON.stringify(user));
            return new NextResponse("User was not found but created: " + JSON.stringify(user), { status: 404 });
        }

        console.log("User found:", JSON.stringify(user));
        return new NextResponse(JSON.stringify(user), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        return new NextResponse(`Internal Server Error: ${error.message}`, { status: 500 });
    }


}


export async function POST(Request) {
    await connectToDatabase()
    const userData = await Request.json()
    console.log(userData)
    const missingFields = [];
    if (!userData.email) missingFields.push('email');
    if (!userData.firstName) missingFields.push('firstName');
    if (!userData.lastName) missingFields.push('lastName');
    if (!userData.createdAt) missingFields.push('createdAt');

    if (missingFields.length > 0) {
        return new NextResponse(`Missing required fields: ${missingFields.join(', ')}`, { status: 400 });
    }
    await userSchema.create({ ...userData, createdAt: new Date() })
    return new NextResponse("User created successfully", { status: 200 })

}    
