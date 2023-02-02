
import { useRouter } from 'next/router'
import AppLayout from '../../components/Layout';
import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'
import user from '../../libs/authModel'
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
import KeyIcon from '@mui/icons-material/Key';



type Values = {
    email: string,
    password: string,
}

export default function LoginPage() {


    const [values, setValues] = useState<Values>({
        email: "",
        password: "",

    });

    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const status = await signIn('credentials', {
            redirect: false,
            username: values.email,
            password: values.password,
            callbackUrl: "/"
        })
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };


    return (
        <div className='bg-red-600'>
            <AppLayout type="centered">
                <div className=" grid h-screen place-items-center">
                    <form onSubmit={(e) => handleSubmit(e)} className='bg-black text-white flex font-mono'>
                        <div className="flex-1 text-white p-20">
                            <h1 className="text-3xl pb-2 font-mono">Join us</h1>

                            <p className="text-sm text-white">
                                Join our community of passion and music.
                                You can access to all the new products in priority and learn more about the brand.
                            </p>

                            <div className="mt-6 ">
                                <div className="pb-4">
                                    <input name='email' id='email' type='email' placeholder="E-mail/Username" className="outline-0 border-b-2 p-1 text-white bg-transparent w-1/2" onChange={handleChange} />
                                </div>

                                <div className="pb-4">

                                    <input name='password' id='password' type={passwordShown ? "text" : "password"} placeholder="Password" className="outline-0 border-b-2 p-1 text-white bg-transparent w-1/2" onChange={handleChange} />
                                    <IconButton onClick={togglePassword} color="primary" className='-translate-x-8 z-10'>
                                        <KeyIcon />
                                    </IconButton>
                                </div>

                                <div className="py-4 pt-8 flex justify-between text-red-600 font-mono">
                                    <button type="submit" className="bg-red-600 text-white p-2 rounded-lg border-2 border-transparent hover:bg-transparent hover:border-white" > Submit </button>
                                    <button className='bg-red-600 p-2 rounded-lg text-white border-2 border-transparent hover:bg-transparent hover:border-white' onClick={() => router.push('/authClient/RegistrationPage')}>Subscribe Now</button>
                                    <div className=''>
                                        <IconButton className="text-sm bg-red-600" color="primary" onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000' })}>
                                            <GoogleIcon />
                                        </IconButton>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </AppLayout >
        </div >
    )
}