
import { useRouter } from 'next/router'
import AppLayout from '../../components/Layout';
import React, { useState } from 'react';


type Values = {
    password: string,
    email: string,
    address: string,
    checkPassword: string,
}


export default function RegistrationPage() {

    const router = useRouter();

    const [values, setValues] = useState<Values>({
        password: "",
        email: "",
        address: "",
        checkPassword: "",
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
        //event.preventDefault();

        const res = await fetch('/api/auth/subscribe', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(response => {
            if(response.status == 200){
                router.push('/authClient/loginPage')
            }
        })
        
    }
    

    return (
        <div className='bg-red-600'>
            <AppLayout type="centered">
                <div className=" grid h-screen place-items-center">
                    <form onSubmit={handleSubmit} className='bg-black text-white font-mono'>
                        <div className="text-white p-10 grid grid-cols-1 place-items-center">
                            <h1 className="text-3xl pb-2 font-mono">Join us</h1>

                            <p className="text-sm text-white">
                                Join our community of passion and music.
                                You can access to all the new products in priority and learn more about the brand.
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-2 justify-items-center text-center">
                            <div className="pb-4">
                                <p className="text-sm font-mono text-red-600">E-mail/Username</p>
                                <input name='email' id='email' type='email' onChange={handleChange} className="border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500 text-black" />
                            </div>

                            <div className="pb-4">
                                <p className="text-sm font-mono text-red-600">Adress</p>
                                <input name='address' id='address' type='address' onChange={handleChange} className="border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500 text-black" />
                            </div>

                            <div className="pb-2">
                                <p className="text-sm font-mono text-red-600">Password</p>
                                <input name='password' id='password' type='password' onChange={handleChange} className="border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500 text-black " />
                            </div>
                            <div className="pb-2">
                                <p className="text-sm font-mono text-red-600">Confirm Password</p>
                                <input name='chechPassword' id='chechPassword' type='chechPassword' onChange={handleChange} className="border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500 text-black " />
                            </div>
                        </div>
                        <div className="grid place-items-center p-4">
                            <button type="submit" className="bg-red-600 font-latoBold text-sm text-white p-3 mt-6 rounded-lg px-4" >Submit </button>
                        </div>

                    </form>
                </div>
            </AppLayout >
        </div >
    )
}