
import type { NextPage } from 'next'
import AppLayout from '../components/Layout'
import React, { useState } from 'react'


export default function LoginPage(props: any) {


    const [inputs, setInputs] = useState({});

    const handleChange = (event: any) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event: any) => {
      event.preventDefault();
      alert(inputs);
    }

    return (
        <div className='bg-red-600'>
            <AppLayout type="centered">
                <div className=" grid h-screen place-items-center">
                    <form action="/send-data-here" method="post" className='bg-black text-white flex font-mono'>
                        <div className="flex-1 text-white p-20">
                            <h1 className="text-3xl pb-2 font-mono">
                                Join us
                            </h1>
                            <p className="text-sm text-white">
                                Join our community of passion and music.
                                You can access to all the new products in priority and learn more about the brand.
                            </p>
                            <div className="mt-6 ">
                                <div className="pb-4">
                                    <label htmlFor="email" className="block font-mono text-sm pb-2">
                                    </label>
                                    <p className="text-sm font-mono text-red-600">E-mail/Username</p>
                                    <input className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500" onChange={handleChange} />
                                </div>

                                <div className="pb-4">
                                    <label htmlFor="password" className="block font-mono text-sm pb-2">
                                    </label>
                                    <p className="text-sm font-mono text-red-600">Password</p>
                                    <input className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 " />
                                </div>

                                <div className="pb-4">
                                    <button type="submit" className="bg-red-600 font-latoBold text-sm text-white p-3 mt-6 rounded-lg" >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </AppLayout >
        </div >
    )
}