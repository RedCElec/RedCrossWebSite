
import {useRouter} from 'next/router'
import AppLayout from '../../components/Layout';
import React, { useState } from 'react';
import { FieldValue, useForm } from 'react-hook-form';
import { useSession, signIn, signOut } from 'next-auth/react'


export default function LoginPage() {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (values: FieldValue<String>): void => {
        console.log(values);

        
        fetch("http://localhost:3080/api2/ifConnected", {
            method: 'POST',
            body: JSON.stringify({
                username: 'Salut',
                password: 'daccord',
              }),
        })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


    }
    const router = useRouter();

    return (
        <div className='bg-red-600'>
            <AppLayout type="centered">
                <div className=" grid h-screen place-items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className='bg-black text-white flex font-mono'>
                        <div className="flex-1 text-white p-20">
                            <h1 className="text-3xl pb-2 font-mono">Join us</h1>

                            <p className="text-sm text-white">
                                Join our community of passion and music.
                                You can access to all the new products in priority and learn more about the brand.
                            </p>

                            <div className="mt-6 ">
                                <div className="pb-4">
                                    <p className="text-sm font-mono text-red-600">E-mail/Username</p>
                                    <input className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 text-black" {...register('username')} />
                                </div>

                                <div className="pb-4">
                                    <p className="text-sm font-mono text-red-600">Password</p>
                                    <input className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 text-black " {...register('password')} />
                                </div>

                                <div className="pb-4 flex justify-between text-red-600">
                                    <button type="submit" className="bg-red-600 font-latoBold text-sm text-white p-3 mt-6 rounded-lg" > Submit </button>
                                    <button onClick={() => router.push('/RegistrationPage')}>no register yet ?</button>
                                    <button onClick={() => signIn('google', {callbackUrl: 'http://localhost:3000'})}>Sign in with Google</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </AppLayout >
        </div >
    )
}