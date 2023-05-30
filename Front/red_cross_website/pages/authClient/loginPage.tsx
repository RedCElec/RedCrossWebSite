
import { useRouter } from 'next/router'
import AppLayout from '../../components/Layout';
import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'
import user from '../../DATA/libs/authModel'
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
import KeyIcon from '@mui/icons-material/Key';

import FormInput from "../../components/FormInput/FormInput"



type Values = {
    email: string,
    password: string,
}

export default function LoginPage() {


    const [values, setValues] = useState<Values>({
        email: "",
        password: "",

    });

    const [checkReq, setCheckReq] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        //console.log(values.password)
    }
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values.password)
        const status = await signIn('credentials', {
            redirect: false,
            username: values.email,
            password: values.password,
            callbackUrl: "/"
        });
        
        if(!status.ok && !checkReq){
            setCheckReq(!checkReq);
        }

        console.log(checkReq)
        return status;
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    
    const router = useRouter();


    return (
        <div className='bg-red-600'>
            <AppLayout type="centered">
                <div className=" grid h-screen place-items-center">
                    <form onSubmit={(e) => onSubmit(e)} className='bg-black text-white flex font-mono'>
                        <div className="flex-1 text-white p-20">
                            <h1 className="text-3xl pb-2 font-mono">Join us</h1>

                            <p className="text-sm text-white pb-6">
                                Join our community of passion and music.
                                You can access to all the new products in priority and learn more about the brand.
                            </p>
                            <div className="pb-4">
                               <input name='email' id='email' type='email' placeholder="E-mail/Username" className="outline-0 border-b-2 p-1 text-white bg-transparent w-1/2 invalid:border-red-600 invalid:text-red-600" onChange={onChange} />
                            </div>

                            <div className="pb-4">
                                <input name='password' id='password' type={passwordShown ? "text" : "password"} pattern= "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$" placeholder="Password" className="outline-0 border-b-2 p-1 text-white bg-transparent w-1/2 invalid:border-red-600 invalid:text-red-600" onChange={onChange} />
                                <IconButton onClick={togglePassword} color="primary" className='-translate-x-8 z-10 '>
                                    <KeyIcon />
                                </IconButton>
                            </div>

                            {checkReq 
                            ?<div className='text-red-600'>&#9888; Wrong Email or Password !! </div>
                            : <></>
                            }

                            <div className="py-4 pt-8 flex justify-between text-red-600 font-mono">
                                <button type="submit" className="bg-red-600 text-white p-2 rounded-lg border-2 border-transparent hover:bg-transparent hover:border-white" > Submit </button>
                                <button className='bg-red-600 p-2 rounded-lg text-white border-2 border-transparent hover:bg-transparent hover:border-white' onClick={() => router.push('/authClient/SubscribePage')}>Subscribe Now</button>
                                <div className=''>
                                    <IconButton className="text-sm bg-red-600" color="primary" onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000' })}>
                                        <GoogleIcon />
                                    </IconButton>

                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </AppLayout >
        </div >
    )
}