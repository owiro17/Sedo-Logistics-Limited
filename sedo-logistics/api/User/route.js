import connectToDatabase from '../../../../libs/mongodb'
import userSchema from '../../../../models/users'
import { NextResponse } from 'next/server';


export async function POST(Request) {
    await connectToDatabase()
    const userData = await Request.json()
    console.log(userData)
    await userSchema.create({ ...userData, createdAt: new Date() })
    return new NextResponse("User created successfully", {status: 200})

}    
