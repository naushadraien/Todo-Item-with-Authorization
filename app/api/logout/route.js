import { setCookie } from "@/utils/dbConn";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {


    
  try {
    
    
    // console.log('Response is', res);
      setCookie(null, false); //calling the setCookie function to set the cookie in the browser of the user

      return NextResponse.json(
        {
          //NextResponse is a new way in nextjs to send the message to the user
          message: 'Logged out successfully', //this is for sending a success response to the user
        },
        {
          status: 200, //this is for sending the status code to the user
        }
      );
  } catch (error) {
    console.log("Error is", error);
    return NextResponse.json(
      {
        message: "Server Error, Please Try Again!", //this is for sending an error response to the user
      },
      {
        status: 500, //this is for sending the status error code to the user
      }
    );
  }
};
