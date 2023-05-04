'use client'
import Link from 'next/link'

export const metadata = {
    title: 'Register',
    description: 'Todo App built with Next.js and mongodb',
  }

const page = () => {
  return (
    <div className='login'>
        <section>
            <form>
                <input type="text" placeholder='Enter your name' />
                <input type="email" placeholder='Enter your email' />
                <input type="password" placeholder='Enter your password' />
                <button type='submit'>Sign Up</button>
                <p>OR</p>
                <Link href='/login'>Login</Link>
            </form>
        </section>
    </div>
  )
}

export default page