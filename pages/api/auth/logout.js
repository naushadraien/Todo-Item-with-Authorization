import { setCookie } from "@/utils/dbConn";
// import { NextResponse } from "next/server";

 const handler = async (req, res) => {

  if (req.method !== "GET")
    return res.status(400).json({
        message: "Only GET Method is allowed"
    });

  try {
    
      setCookie(res,null, false); //calling the setCookie function to set the cookie in the browser of the user

      return res.json(
        {
          //NextResponse is a new way in nextjs to send the message to the user
          message: 'Logged out successfully', //this is for sending a success response to the user
        },
      );
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