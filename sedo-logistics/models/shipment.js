import {Schema,mongoose} from 'mongoose';
//  create a schema
const shipmentsSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  consignee: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  shipmentInfo: {
    ref: { type: String, required: true,unique:true },
    awb: { type: String, required: true },
    currentLocation: { type: String, required: true },
    destination: { type: String, required: true },
    estimatedDeliveryDate: { type: Date, required: true },
    status: { type: String, required: true },
    modeOfTransport: { type: String, required: true },
  },
  goodsInfo: [{
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    dimension: { type: String, required: false },
    weight: { type: String, required: true },
  }],
  documents: [{
    name: { type: String, required: false },
    link: { type: String, required: false },
  }],
  progress: [
    {
      step: { type: String, required: true },
      completed: { type: Boolean, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Shipments || mongoose.model('Shipments', shipmentsSchema);