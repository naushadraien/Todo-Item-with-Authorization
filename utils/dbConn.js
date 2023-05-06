import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import { serialize } from "cookie";

export const connectDB = async ()=>{

  const {connection} = await mongoose.connect(process.env.MONGODB_URL,{
        dbName: 'todo',
    });

    console.log(`MongoDB connected: ${connection.host}`);

};

// export const setCookie = (res,token,set)=>{ //this function is used to set the cookie in the browser
//     res.setHeader('Set-Cookie', serialize('token', set?token:'', { //serialize is a function from cookie package which is used to set the cookie in the browser
//         path: '/',
//         httpOnly: true,
//         maxAge: set? 7 * 24 * 60 * 60 * 1000: 0, // 1 week and if set is false then set the maxAge to 0
//     }));
// };


export const generateToken = (_id)=>{ //this function is used to generate the token for the user   
    return jwt.sign({_id}, process.env.JWT_SECRET);
}