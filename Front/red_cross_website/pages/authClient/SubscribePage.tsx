
import { useRouter } from 'next/router'
import AppLayout from '../../components/Layout';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyIcon from '@mui/icons-material/Key';

type Values = {
    email: string,
    password: string,
    passwordconf: string
    firstname: string,
    lastname: string,
    phone: string,
}

export default function RegistrationPage() {

    const router = useRouter();

    const [values, setValues] = useState<Values>({
        email: "",
        password: "",
        passwordconf: "",
        firstname: "",
        lastname: "",
        phone: "",


    });

    //Toggle For show password
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    //form react logic
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    //form submit
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const body = { ...values };

        if (body.password !== body.passwordconf) {
            console.log("Password are not matching")
        }
        else { 
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
                return response;
            })
        console.log(res)
    }
}



return (
    <div className='bg-red-600'>
        <AppLayout type="centered">
            <div className=" grid h-screen place-items-center p-12 mb-28">

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
                                <input
                                    name='email'
                                    id='email'
                                    type='email'
                                    placeholder="E-mail"
                                    className="outline-0 border-b-2 p-1 text-white bg-transparent w-64 invalid:border-red-600 invalid:text-red-600"
                                    onChange={handleChange} />
                            </div>
                            <div className='px-12'>
                                <input
                                    name='password'
                                    id='password'
                                    type={passwordShown ? "text" : "password"}
                                    placeholder="Password"
                                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$"
                                    className="outline-0 border-b-2 p-1 text-white bg-transparent w-64 invalid:border-red-600 invalid:text-red-600"
                                    onChange={handleChange} />
                                <IconButton onClick={togglePassword} color="primary" className='-translate-x-8 z-10'>
                                    <KeyIcon />
                                </IconButton>
                            </div>
                        </div>

                        <div className='p-6'>
                            <input
                                name='passwordConf'
                                id='passwordConf'
                                type={passwordShown ? "text" : "password"}
                                placeholder="Password Confirmation"
                                className="outline-0 border-b-2 p-1 text-white bg-transparent w-64 invalid:border-red-600 invalid:text-red-600"
                                onChange={handleChange} />
                            <IconButton onClick={togglePassword} color="primary" className='-translate-x-8 z-10'>
                                <KeyIcon />
                            </IconButton>
                        </div>

                        <div className='text-xl font-mono text-white p-8'>User Information</div>
                        <div className="p-4 text-sm font-mono text-red-600 grid grid-cols-2">
                            <div className="p-6">
                                <input name='name' id='firstName' type='text' placeholder="First Name" onChange={handleChange} className="outline-0 border-b-2 p-1 text-white bg-transparent w-56" />
                            </div>
                            <div className="p-6">

                                <input name='name' id='lastName' type='text' placeholder="Last Name" onChange={handleChange} className="outline-0 border-b-2 p-1 text-white bg-transparent w-56" />
                            </div>
                            <div className="p-6">

                                <input name='name' id='adress' type='text' placeholder="Adress" onChange={handleChange} className="outline-0 border-b-2 p-1 text-white bg-transparent w-56" />
                            </div>
                            <div className="p-6">

                                <input name='name' id='phone' type='text' placeholder="Phone Number" onChange={handleChange} className="outline-0 border-b-2 p-1 text-white bg-transparent w-56" />
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