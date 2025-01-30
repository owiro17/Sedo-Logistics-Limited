import { auth, currentUser } from '@clerk/nextjs/server'


export default async function getUserData(req, res) {

    const { user } = await auth.api.getUser(req);
    const userDetails = await currentUser.getUserDetails(user.id);
    return res.status(200).json(userDetails);
    }