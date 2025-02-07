import User from '../../models/user';
import connectToDatabase from '../connectDB';

export const createOrUpdateUser = async (params) => {
    const { email, id, firstName, lastName, ...otherParams } = params;
    const missingFields = [];
    if (!email) missingFields.push('email');
    if (!firstName) missingFields.push('firstName');
    if (!lastName) missingFields.push('lastName');
    if (!id) missingFields.push('No ID provided');

    if (missingFields.length > 0) {
        return { error: `Missing required fields: ${missingFields.join(', ')}` };
    }
    try {
        await connectToDatabase();
        const existingUser = await User.findOne({ clerkId: id });
        if(existingUser){
            return { user: existingUser };
        }

        const user = await User.findOneAndUpdate(
            { userid: id },
            { $set: { firstName: firstName, lastName: lastName, email: email, ...otherParams } },
            { upsert: true, new: true }
        );
        return { user };
    } catch (error) {
        return { error: error.message };
    }
}
