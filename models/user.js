import mongoose, { Schema} from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  createdAt: { type: Date, required: true },
  phoneNumber: { type: String, required: true },
  companyName : { type: String, required: false },


});
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;