"use client";

import Link from "next/link";
import { useState, createContext, useContext, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";


export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => { //this is for checking if the user is logged in or not if logged in the show the user data as it is if user is not logged in then show empty data
  const persistedUser = async ()=>{
    const res = await fetch('/api/auth/myprofile');
    const data = await res.json();
    if(data.success) {
      setUser(data.user);
    };
    // console.log(user);
  };

  persistedUser(); //calling the function

  },[]);
  

  return (
    <Context.Provider value={{ user, setUser }}>
      {children} {/* This is the children of ContextProvider */}
      <Toaster /> 
    </Context.Provider>
  );
};

export const LogoutButton = () => {
  const { user, setUser } = useContext(Context); // This is the user from ContextProvider
  // console.log(user);
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout");
      const data = await res.json();
      console.log(data);
      if(!data.success) {
        return toast.error(data.message);
      }else{
        setUser({});
        return toast.success(data.message);
      }
    } catch (error) {
      return toast.error(error);
    }


  };
  return ( // This is the children of LogoutButton
    <>
      {user._id ? (
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </>
  );
};

export const TodoBtn = ({id, completed})=>{
  
  const router = useRouter();

  const handleDelete = async (id)=>{

    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if(!data.success) {
        return toast.error(data.message);
      }else{
         toast.success(data.message);
        router.refresh();
      }
    } catch (error) {
      return toast.error(error.toString());
    }

  }

  const handleUpdate = async (id)=>{

    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
      });
      const data = await res.json();
      if(!data.success) {
        return toast.error(data.message);
      }else{
         toast.success(data.message);
        router.refresh();
      }
    } catch (error) {
      return toast.error(error.toString());
    }

  }

  return (
    <>
    <input type="checkbox" checked={completed} onChange={()=>handleUpdate(id)} />
    <button className="btn" onClick={()=>handleDelete(id)}>Delete</button>
    </>
  )
}
