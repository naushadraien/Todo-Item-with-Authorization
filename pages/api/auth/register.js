import { User } from "@/models/user";
import { connectDB, generateToken, setCookie } from "@/utils/dbConn";
// import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

 const handler = async (req, res) => {
  if (req.method !== "POST")
  return res.status(400).json({
      message: "Only POST Method is allowed"
  });

  try {
    const { name, email, password } = req.body;
    //destructuring the body object and getting the email and password from body by destructuring

    if (!name || !email || !password) {
      // to check if the user has entered all the fields or not
      try {
        return res.json(
          {
            //NextResponse is a new way in nextjs to send the message to the user
            message: "Please enter all fields!", //this is for sending a success response to the user
          },
        );
      } catch (error) {
        console.log(error);
      }
    }

    await connectDB();

    let user = await User.findOne({ email }); //to check if the user already exists in the database

    if (user) {
      //to check if the user already exists in the database
      try {
        return res.json(
          {
            //NextResponse is a new way in nextjs to send the message to the user
            message: "User already registered!", //this is for sending a success response to the user
          },
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      //if the user does not exist in the database then create a new user

      const hashedPassword = await bcrypt.hash(password, 10); //hashing the password using bcrypt

      user = await User.create({
        name,
        email,
        password: hashedPassword, //storing the hashed password in the database
      });
      console.log("User is", user);

      const token = generateToken(user._id); //calling the generateToken function to generate the token for the user

      console.log("Token is", token);
      console.log("Res is", res);
      setCookie(res,token, true); //calling the setCookie function to set the cookie in the browser of the user

      return res.json(
        {
          //NextResponse is a new way in nextjs to send the message to the user
          success: true,
          message: "User registered successfully", //this is for sending a success response to the user
          user,
        },
      );
    }
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