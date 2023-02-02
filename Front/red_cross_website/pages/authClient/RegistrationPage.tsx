
import { useRouter } from 'next/router'
import AppLayout from '../../components/Layout';
import React, { useState } from 'react';


type Values = {
    name: string,
    email: string,
    password: string,
    otherField1: string
    otherField2: string
    otherField3: string

}

export default function RegistrationPage() {

    const router = useRouter();

    const [values, setValues] = useState<Values>({
        name: "",
        email: "",
        password: "",
        otherField1: "",
        otherField2: "",
        otherField3: "",


    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        //event.preventDefault();
        const body = { ...values };
        //console.log(`POSTing ${JSON.stringify(body, null, 2)}`);

        const res = await fetch('/api/auth/createUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(response => {
                if (response.status == 200) {
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

                        <div className="mt-2 grid grid-cols-1 justify-items-center text-center">

                        <div className='text-xl font-mono text-white pb-8'>Login Information</div>

                            <div className="pb-4 flex justify-around text-sm font-mono text-red-600">
                                <div className='px-12'>
                                    <input name='email' id='email' type='email' placeholder="E-mail" onChange={handleChange} className="outline-0 border-b-2 p-1 text-white bg-transparent w-64" />
                                </div>
                                <div className='px-12'>
                                    <input name='password' id='password' type='password' placeholder="Password" onChange={handleChange} className="outline-0 border-b-2 p-1 text-white bg-transparent w-64" />
                                </div>
                            </div>
                        <div className='text-xl font-mono text-white p-8'>User Information</div>    
                            <div className="p-4 text-sm font-mono text-red-600 grid grid-cols-2">
                                <div className="p-6">
                                    <input name='name' id='name' type='text' placeholder="First Name" onChange={handleChange} className="outline-0 border-b-2 p-1 text-white bg-transparent w-56" />
                                </div>
                                <div className="p-6">
                                    
                                    <input name='name' id='name' type='text' placeholder="Last Name" onChange={handleChange} className="outline-0 border-b-2 p-1 text-white bg-transparent w-56" />
                                </div>
                                <div className="p-6">
                                    
                                    <input name='name' id='name' type='text' placeholder="Adress" onChange={handleChange} className="outline-0 border-b-2 p-1 text-white bg-transparent w-56" />
                                </div>
                                <div className="p-6">
                                    
                                    <input name='name' id='name' type='text' placeholder="Phone Number" onChange={handleChange} className="outline-0 border-b-2 p-1 text-white bg-transparent w-56" />
                                </div>
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