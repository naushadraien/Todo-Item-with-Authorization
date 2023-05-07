import { connectDB, isAuth } from "@/utils/dbConn";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  
    try {

        await connectDB(); 

        const user = isAuth(req);
        console.log('user', user);

        const todos = await Task.find({user:user._id });

        return NextResponse.json({ //NextResponse is a new way in nextjs to send the message to the user
            todos // to send the todos to the user
        },
        {
            status: 200 //this is for sending the status code to the user
        }
        )
    } catch (error) {
        return NextResponse.json({
            message: 'Server Error, Please Try Again!' //this is for sending an error response to the user
        },
        {
            status: 500 //this is for sending the status error code to the user
        })
    }
 }