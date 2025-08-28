import {Schema, mongoose} from 'mongoose';

const quotationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    approved : { type: Boolean, required: true, default: false },
    consignee: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },
    shipmentInfo: {
      ref: { type: String, required: true },
      awb: { type: String, required: true },
      currentLocation: { type: String, required: true },
      destination: { type: String, required: true },
      estimatedDeliveryDate: { type: Date, required: true },
      status: { type: String, required: true },
      modeOfTransport: { type: String, required: true },
    },
    quotationItems:[{
        description: { type: String, required: true },
        quantity: { type: Number, required: true },
        amount: { type: Number, required: true },
        tax: { type: Number, required: false },
        TotalAmount: { type: Number, required: true },
    }]
});

export default mongoose.models.Quotations || mongoose.model('Quotation', quotationSchema);