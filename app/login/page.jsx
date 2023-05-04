'use client'
import Link from 'next/link'

export const metadata = {
    title: 'Login',
    description: 'Todo App built with Next.js and mongodb',
  }

const page = () => {
  return (
    <div className='login'>
        <section>
            <form>
                <input type="email" placeholder='Enter your email' />
                <input type="password" placeholder='Enter your password' />
                <button type='submit'>Login</button>
                <p>OR</p>
                <Link href='/register'>Register New</Link>
            </form>
        </section>
    </div>
  )
}

export default page