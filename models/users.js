import mongoose, { Schema} from 'mongoose';

const userSchema = new Schema({
  Userid: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  createdAt: { type: Date, required: true },
  phoneNumber: { type: String, required: true },
  organization : { type: String, required: true },


});
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
