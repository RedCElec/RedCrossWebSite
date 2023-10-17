
import { useRouter } from 'next/router'
import AppLayout from '../../components/Layout';
import React, { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import KeyIcon from '@mui/icons-material/Key';
import Link from 'next/link'





export default function LoginPage() {


    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: "",

    });

    const Login = async () => {
        console.log(user);
        try {
            await signIn('credentials', {
                email: user.email,
                password: user.password,
                redirect: true,
                callbackUrl: '/authClient/accountPage'
            },)
        } catch {
            console.log('Error while logging in')
        }
    }



    return (
        
            <AppLayout type="centered" className='bg-red-600'>
                <div className='flex flex-col items-center min-h-screen py-2 pt-20 font-mono text-white'>
                    <div className='p-10 rounded-lg shadow-lg shadow-gray-800/50 flex flex-col bg-black'>
                        <h1 className='text-xl font-medium mb-4'>Sign In</h1>
                        <label htmlFor="" className='mb-2'>Email</label>
                        <input
                            type="text"
                            className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black'
                            id='email'
                            value={user.email}
                            placeholder='email'
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                        <label htmlFor="" className='mb-2'>Password</label>
                        <input
                            type="password"
                            className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black'
                            id='password'
                            value={user.password}
                            placeholder='password'
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                        <button onClick={Login} className='p-2 border bg-red-600 text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600'>
                            Login Now
                        </button>
                        <div className='flex justify-center gap-4'>
                            <GoogleIcon onClick={()=>signIn('googleAuth')} className='w-10 h-10 p-2 rounded-full bg-red-600 text-white hover:bg-transparent focus:border-gray-600'/>
                            <FacebookIcon className='w-10 h-10 p-2 rounded-full bg-red-600 text-white hover:bg-transparent focus:border-gray-600'/>
                        </div>
                        <Link href='/authClient/registerPage' className='text-sm text-center mt-5 text-neutral-600'>Do not have an account</Link>
                        <Link href='/' className='text-center mt-2'>Home</Link>
                    </div>
                </div>
            </AppLayout >
        
    )
}