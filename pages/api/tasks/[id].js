import { connectDB, isAuth } from "@/utils/dbConn";
import { Task } from "@/models/task";
// import { NextResponse } from "next/server";

 const handler = async (req, res) => {

    await connectDB(); 
    
        const user = await isAuth(req);
        if(!user) { //if user is not present then return a message as below array
            return res.status(401).json({
                message: 'Please Login to see your todos'
            })
        }; 

        const taskId = req.query.id; //this is for getting the id from the url for page directory but params for app directory
        // console.log('task ID is',taskId);

        // console.log(req.query); //this is for getting the id from the url for page directory but params for app directory

        const task = await Task.findById(taskId); //for finding the task by id
        // console.log('task is',task);

  
    if (req.method === "PUT"){ //this is for updating the task

        try {
           
            if(!task) { //if task is not present then return a message as below array
                return res.status(404).json({
                    message: 'Task not found'
                })
            }else{
                 task.isCompleted = !task.isCompleted; //this is for toggling the task status from true to false and vice versa
                 
                    await task.save(); //this is for saving the task
                    res.status(200).json({ 
                        status: 'success',
                        message: 'Task has been updated successfully' //this is for sending a success response to the user
                    });
                };


        } catch (error) {
            return res.json({
                message: 'Server Error, Please Try Again!' //this is for sending an error response to the user
            },);
        }

    }else if (req.method === "DELETE"){ //this is for deleting the task

        if(!task) { //if task is not present then return a message as below array
            return res.status(404).json({
                message: 'Task not found'
            })
        }else{

        await task.deleteOne(); //this is for deleting the task
        res.status(200).json({
            status: 'success',
            message: 'Task has been deleted successfully' //this is for sending a success response to the user  
        })};


    }else{
        return res.status(400).json({
            message: "only PUT and DELETE Method is allowed"
        });
    };

   
 }

 export default handler;