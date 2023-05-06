import { connectDB } from "@/utils/dbConn";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  
    try {
        const body = await req.json();
        const {title, description} = body; //destructuring the body object

        // console.log(body);
        await connectDB(); 
        // console.log(process.env.MONGODB_URL);

        await Task.create({
            title,
            description,
            user: '60f0b0b3e3b3c2a8b8b0b0b0'
        });
        return NextResponse.json({ //NextResponse is a new way in nextjs to send the message to the user
            message: 'Your message has been sent successfully' //this is for sending a success response to the user
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