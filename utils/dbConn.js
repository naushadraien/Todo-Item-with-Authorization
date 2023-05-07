import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import { serialize } from "cookie";
// import { NextRequest, NextResponse } from "next/server";

export const connectDB = async ()=>{

  const {connection} = await mongoose.connect(process.env.MONGODB_URL,{
        dbName: 'todo',
    });

    console.log(`MongoDB connected: ${connection.host}`);

}; 


//below functions are middlewares

export const setCookie = (res,token,set)=>{ //this function is used to set the cookie in the browser
    // const res = NextResponse.next();
    res.setHeader('Set-Cookie', serialize('token', set?token:'', { //serialize is a function from cookie package which is used to set the cookie in the browser
        path: '/',
        httpOnly: true,
        maxAge: set? 7 * 24 * 60 * 60 * 1000: 0, // 1 week and if set is false then set the maxAge to 0
    }));
    console.log(res);
    // return res;
};


export const generateToken = (_id)=>{ //this function is used to generate the token for the user   
    return jwt.sign({_id}, process.env.JWT_SECRET);
}

export const isAuth = (req)=>{ //this function is used to check if the user is authenticated or not 
    console.log("Token is", req.headers.cookie);
}