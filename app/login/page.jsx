'use client'
import Link from 'next/link'
import { useContext, useState, useEffect } from 'react';
import { Context } from '../components/ClientSide';
import {redirect, useRouter} from 'next/navigation'
import { toast } from 'react-hot-toast';


const Page = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const {user, setUser} = useContext(Context); // destructring the user from ContextProvider

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}
          ),
      })
     const data = await response.json();
     if(!data.success){
      return toast.error(data.message);
     }else{
       setUser(data.user)
      toast.success(data.message);
     }
    } catch (error) {
      return toast.error(error.toString());
    }
  }

  useEffect(() => {
    if(user._id) {
      router.refresh();
       redirect('/');
    }
  },[user]);
 
  
  return (
    <div className='login'>
        <section>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type='submit'>Login</button>
                <p>OR</p>
                <Link href='/register'>Register New</Link>
            </form>
        </section>
    </div>
  )
}

export default Page