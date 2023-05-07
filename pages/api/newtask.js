import { connectDB, isAuth } from "@/utils/dbConn";
import { Task } from "@/models/task";
// import { NextResponse } from "next/server";

 const handler = async (req, res) => {
    if (req.method !== "POST")
    return res.status(400).json({
        message: "Only POST Method is allowed"
    });
    try {
        const {title, description} = req.body; //destructuring the body object

        if(!title || !description) { // to check if the user has entered all the fields or not
            return res.status(400).json({
                message: 'Please enter all fields!'
            });
        }

        // console.log(body);
        await connectDB(); 
        // console.log(process.env.MONGODB_URL);

        const user = await isAuth(req);
        if(!user) { //if user is not present then return a message as below array
            return res.status(401).json({
                message: 'Please Login to see your todos'
            })
        }; 

        await Task.create({
            title,
            description,
            user: user._id,
        });
        return res.json({ //NextResponse is a new way in nextjs to send the message to the user
            message: 'Your task has been sent successfully' //this is for sending a success response to the user
        },
        )
    } catch (error) {
        return res.json({
            message: 'Server Error, Please Try Again!' //this is for sending an error response to the user
        },)
    }
 }

 export default handler;