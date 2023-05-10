'use client'
import Link from 'next/link'
import { useContext, useState } from 'react';
import { Context } from '../components/ClientSide';
import { redirect } from 'next/navigation';
import { toast } from 'react-hot-toast';

const Page = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user, setUser} = useContext(Context);// destructring the user from ContextProvider

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
     const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name,email, password}
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
      return toast.error(error);
    }
  }

  if(user._id) {
    return redirect('/');
  }

  return (
    <div className='login'>
        <section>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit'>Sign Up</button>
                <p>OR</p>
                <Link href='/login'>Login</Link>
            </form>
        </section>
    </div>
  )
}


export default Page