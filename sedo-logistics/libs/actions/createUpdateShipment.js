import shipments from "@/models/shipment";
import connectToDatabase from "@/libs/connectDB";

export const createOrUpdateShipment = async (params) => {
    const { userId, consignee, shipmentInfo, goodsInfo, documents, progress } = params;
    const missingFields = [];
    if (!userId) missingFields.push('userId');
    if (!consignee) missingFields.push('consignee');
    if (!shipmentInfo) missingFields.push('shipmentInfo');
    if (!goodsInfo) missingFields.push('goodsInfo');
    if (!progress) missingFields.push('progress');
    //cehck missing fields
    if(missingFields.length > 0){
        return { error: `Missing required fields: ${missingFields.join(', ')}` };
    }
    //connect to database
    try {
        await connectToDatabase();
        const existingShipments = await shipments.find({ 'userId': userId });
        if(existingShipments){
            return { shipment: existingShipments };
        }
        
        const shipment = await shipments.findOneAndUpdate(
            { 'shipmentInfo.ref': shipmentInfo.ref },
            { $set: { userId, consignee, shipmentInfo, goodsInfo, documents, progress } },
            { upsert: true, new: true }
        );
        // //create shipment
        // await shipment.create({ ...params, createdAt: new Date() });
        return {shipment ,success: true };
    } catch (error) {
        return { error: error.message };
    }

}