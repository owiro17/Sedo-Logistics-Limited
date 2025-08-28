import {Schema,mongoose} from 'mongoose';

const requestedQuotesSchema = new Schema({
    personalDetails: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        fullName: { type: String, required: true },
        email: { type: String, required: true }
    },
    shippingDetails: {
        pickupLocation: { type: String, required: true },
        deliveryLocation: { type: String, required: true },
        preferredShippingMethod: { type: String, enum: ['Air', 'Sea', 'Land'], required: true },
        address: { type: String, required: true }
    },
    packageDetails: {
        typeOfGoods: { type: String, required: true },
        numberOfItems: { type: Number, required: true },
        weight: { type: String, required: true },
        dimensions: { type: String, required: true },
        additionalServicesNeeded: { type: String }
    },
    uploadDocuments: [{ type: String }]
});

export default mongoose.models.RequestedQuotes || mongoose.model('RequestedQuotes', requestedQuotesSchema);