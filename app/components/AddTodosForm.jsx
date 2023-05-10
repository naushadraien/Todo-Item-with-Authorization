'use client'

import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import { Context } from "./ClientSide";

const AddTodosForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter(); //this is for refreshing the page after adding the todo

  const {user} =useContext(Context); //this is the user from ContextProvider  

  const handleAddTodo = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/newtask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description })
      });
      const data = await res.json();
      if(!data.success) {
        return toast.error(data.message);
      }else{
         toast.success(data.message);
          router.refresh(); //this is for refreshing the page after adding the todo
          setTitle('');
          setDescription('');
      }
    } catch (error) {
      return toast.error(error);
    }
  }

  if(!user._id) return redirect('/login'); //this is for checking if the user is logged in or not if user is not logged in then redirect to login page

  return (
    <div className='login'>
        <section>
            <form onSubmit={handleAddTodo} >
                <input type="text" placeholder='Enter Todos title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <input type="text" placeholder='Enter Todos description' value={description} onChange={(e)=>setDescription(e.target.value)} />
                <button type='submit'>Add Task</button>
            </form>
        </section>
    </div>
  )
}

export default AddTodosForm