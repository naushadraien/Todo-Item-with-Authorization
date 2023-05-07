"use client";

import Link from "next/link";
import { useState, createContext, useContext } from "react";
import { Toaster } from "react-hot-toast";

export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ user, setUser }}>
      {children} {/* This is the children of ContextProvider */}
      <Toaster /> 
    </Context.Provider>
  );
};

export const LogoutButton = () => {
  const { user } = useContext(Context); // This is the user from ContextProvider
  const handleLogout = () => {
    alert("Logout");
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
  const handleDelete = (id)=>{
    alert(`Deleting ${id}`)
  }
  return (
    <>
    <input type="checkbox" checked={completed}/>
    <button className="btn" onClick={()=>handleDelete(id)}>Delete</button>
    </>
  )
}
