import { connectDB, isAuth } from "@/utils/dbConn";
import { Task } from "@/models/task";
// import { NextResponse } from "next/server";

 const handler = async (req, res) => {
  
    if (req.method !== "GET")
    return errorHandler(res, 400, "Only GET Method is allowed");

    try {

        await connectDB(); 

        const user = isAuth(req);
        console.log('user', user);

        const todos = await Task.find({user:user._id });

        return res.json({ //NextResponse is a new way in nextjs to send the message to the user
            todos // to send the todos to the user
        },
        )
    } catch (error) {
        return res.json({
            message: 'Server Error, Please Try Again!' //this is for sending an error response to the user
        },);
    }
 }

 export default handler;