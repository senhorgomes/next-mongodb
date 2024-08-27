import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import User from '@/app/models/User';

const afterCallback = async (req, res, session) => {
  // const { user } = session;
  // console.log("Line 6", session)
  // Check if user exists in database
  // let existingUser = await User.findOne({ id: user.sub });
  console.log("Its working! on line 9 route.js")
  // if (!existingUser) {
    // If user does not exist, create a new user
  //   existingUser = new User({
  //       id: user.sub,
  //     name: user.name,
  //     email: user.email,
  //   });
  //   await existingUser.save();
  // }

  // Return the session
  if(session){
    console.log("Line 22",session)
  }
  return session;
};
export const GET = handleAuth({ callback: handleCallback({
  afterCallback,
}),});