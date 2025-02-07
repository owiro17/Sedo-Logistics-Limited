import  {mongoose, Schema } from 'mongoose';

const userSchema = new Schema({
  // clerkId: { type: String, required: true, unique: true, sparse: true  },
  email: { type: String, required: true, unique: true }, // Ensure email is unique
  firstName: { type: String },
  lastName: { type: String },
  createdAt: { type: Date, required: true },
  phoneNumber: { type: String, required: false },
  companyName: { type: String, required: false },
  userid: { type: String, unique: true, sparse: true,require:true }, // Sparse index to avoid null conflicts
  shipments: [{ type: Schema.Types.ObjectId, ref: 'Shipment' }],
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
