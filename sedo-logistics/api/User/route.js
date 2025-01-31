import connectToDatabase from '../../../../libs/connectDB'
import userSchema from '../../../../models/users'
import { NextResponse } from 'next/server';


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
    return new NextResponse("User created successfully", {status: 200})

}    
