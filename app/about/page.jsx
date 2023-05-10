'use client'

import { useContext } from "react";
import { Context } from "../components/ClientSide";
import { redirect } from "next/navigation";

const About = () => {

  const {user} =useContext(Context); //this is the user from ContextProvider
  if(!user._id) return redirect('/login'); //this is for checking if the user is logged in or not if user is not logged in then redirect to login page

  return (
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'column', marginTop: '1rem'}}>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
    </div>
  )
}

export default About;