
import { useRouter } from 'next/router'
import AppLayout from '../../components/Layout';
import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'
import user from '../../libs/authModel'
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
import { withStyles } from "@material-ui/core/styles";


type Values = {
    password: string,
    email: string,
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
        email: values.email,
        password: values.password,
        callbackUrl: "/"
       })
    }

    const CustomColorIconButton = withStyles({
        root: {
          color: "#ff8833",
          outline: 0,
        }
      })(IconButton);


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
                                    <p className="text-sm font-mono text-red-600">E-mail/Username</p>
                                    <input name='email' id='email' type='email' className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 text-black" onChange={handleChange} />
                                </div>

                                <div className="pb-4">
                                    <p className="text-sm font-mono text-red-600">Password</p>
                                    <input name='password' id='password' type='password' className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 text-black " onChange={handleChange} />
                                </div>

                                <div className="pb-4 flex justify-between text-red-600">
                                    <button type="submit" className="bg-red-600 font-latoBold text-sm text-white p-3 mt-6 rounded-lg" > Submit </button>
                                    <button onClick={() => router.push('/authClient/RegistrationPage')}>no register yet ?</button>
                                    <div>
                                        <CustomColorIconButton className="text-sm" color="secondary" onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000' })} >
                                        Sign-In with <GoogleIcon /> 
                                        </CustomColorIconButton>
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