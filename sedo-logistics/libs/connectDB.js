import { mongoose } from "mongoose";

export default async function connectToDatabase() {
  let initialized = false;
  if (initialized) {
    return ("ALREADY CONNECTED TO DATABASE");
  }

  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGODB_URI);
    initialized = true;
    console.log('CONNECTED TO DATABASE');
  } catch (error) {
    console.log('ERROR CONNECTING TO DATABASE', error);
  }
}