import { connectDB, isAuth } from "@/utils/dbConn";
import { Task } from "@/models/task";
// import { NextResponse } from "next/server";

 const handler = async (req, res) => {
  
    if (req.method !== "GET")
    return res.status(400).json({
        message: "Only GET Method is allowed"
    });

    try {

        await connectDB(); 

        const user = await isAuth(req);

        if(!user) { //if user is not present then return a message as below array
            return res.status(401).json({
                message: 'Please Login to see your todos'
            })
        }; 

        // console.log('user', user);

        const todos = await Task.find({user:user._id });

        return res.json({ //NextResponse is a new way in nextjs to send the message to the user
            success: true, // to send the success message to the user
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