
import { useRouter } from 'next/router'
import AppLayout from '../../components/Layout';
import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import axios from 'axios';
import Link from 'next/link';




type props = {}

function RegisterPage(props: props) {

    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
        surname: "",

    });

    const arrayReact =[ {type:"email", id:"email", value: user.email, placeholder:"email"},
                    {type:"text", id:'name', value:user.name, placeholder:'name', pattern:""},
                    {type:"text", id:'surname', value:user.surname, placeholder:'surname', pattern:""},
                    {type:"password", id:"password", value: user.email, placeholder:"password", pattern:"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$"}, ]

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setUser({ ...user, [event.target.id]: event.target.value });
    }

    const Register = () => {
        const data = {
            email: user.email,
            password: user.password,
            name: user.name,
        }

        axios.post('/api/register/route', data)
            .then((response) => {
                console.log(response);
                router.push("/authClient/loginPage");
               
            })
            .catch((error) => {
                console.log(error)
            })
    }


    //Toggle For show password
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (


        <AppLayout type="centered" className='bg-red-600'>
                <div className='flex flex-col items-center min-h-screen py-2 pt-20 font-mono text-white'>
                    <div className='p-10 rounded-lg shadow-lg shadow-gray-800/50 flex flex-col bg-black'>
                        <h1 className='text-xl font-medium mb-4'>Sign Up</h1>
                            <div className='grid grid-cols-2 gap-4'>

                                {arrayReact.map((item)=>{
                                    return(

                                
                                    <div className='flex flex-col' key={item.id}>
                                        <label htmlFor="" className='mb-2'>{item.id}</label>
                                        <input 
                                        type={item.type}
                                        id={item.id}
                                        placeholder={item.placeholder}
                                        onChange={handleChange}
                                        className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black invalid:bg-red-600'/>
                                    </div> 
                                )})}
                                
                            </div> 
                        <button onClick={Register} className='p-2 border bg-red-600 text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600'>
                            register Now
                        </button>
                        <Link href='/authClient/loginPage' className='text-sm text-center mt-5 text-neutral-600'>Already have an account</Link>
                        <Link href='/' className='text-center mt-2'>Home</Link>
                    </div>
                </div>
            </AppLayout >

    )
}

export default RegisterPage;