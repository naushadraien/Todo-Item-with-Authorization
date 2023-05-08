import {isAuth } from "@/utils/dbConn";

 const handler = async (req, res) => {
    
    if (req.method !== "GET")
    return res.status(400).json({
        message: "Only GET Method is allowed"
    });

  try {

    const user = await isAuth(req);

    if(!user) { //if user is not present then return a message as below array
        return res.status(401).json({
            message: 'Please Login First'
        })
    }else{
        return res.status(200).json({ //NextResponse is a new way in nextjs to send the message to the user
          success: true, // to send the success message to the user
            user, // to send the user to the user
        
        },
        )
    };

    } catch (error) {
    console.log("Error is", error);
    return res.json(
      {
        message: "Server Error, Please Try Again!", //this is for sending an error response to the user
      },
    );
  }
};

export default handler;