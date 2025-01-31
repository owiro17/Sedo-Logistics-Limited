import connectToDatabase from "../../../../libs/connectDB";
import Shipment from "../../../../models/shipment";
import { NextResponse } from "next/server";

export async function POST(Request) {
    await connectToDatabase();
    const ShipmentData = await Request.json();
    console.log(ShipmentData);
    if(!ShipmentData.consignee || !ShipmentData.shipmentInfo || !ShipmentData.goodsInfo || !ShipmentData.documents || !ShipmentData.progress) {
        return new NextResponse("Shipment data is required", { status: 400 });
    }
    try {
        await Shipment.create({ ...ShipmentData, createdAt: new Date() });
    } catch (error) {
        console.log(error);
        return new NextResponse("Error creating shipment", { status: 500 });
    }



    return new NextResponse("Shipment created successfully", { status: 200 });
}