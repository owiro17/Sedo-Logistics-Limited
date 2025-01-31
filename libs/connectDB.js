import { mongoose } from "mongoose";

export default async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('CONNECTED TO DATABASE');
  } catch (error) {
    console.log('ERROR CONNECTING TO DATABASE', error);
  }
}