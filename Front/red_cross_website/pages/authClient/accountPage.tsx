
import { useRouter } from 'next/router'
import AppLayout from '../../components/Layout';
import React, { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react'

import Link from 'next/link'

type Props = {};

export default function AccountPage(props: Props) {

    const router = useRouter();
    const { data: session} = useSession();

    if(session){
    return (
        
            <AppLayout type="centered" className='bg-red-600'>
                <div className='flex flex-col items-center min-h-screen py-2 pt-20 font-mono text-white'>
                    <div className='p-10 rounded-lg shadow-lg shadow-gray-800/50 flex flex-col bg-black'>
                        <h1 className='text-xl font-medium mb-4'>Account Page</h1>
                        
                        <button onClick={async()=> {await signOut({ callbackUrl: 'http://localhost:3000' })}} className='p-2 border bg-red-600 text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600'>
                            SignOut
                        </button>
                        <Link href='/authClient/registerPage' className='text-sm text-center mt-5 text-neutral-600'>Do not have an account</Link>
                        <Link href='/' className='text-center mt-2'>Home</Link>
                    </div>

                </div>
            </AppLayout >
        
    )}

    else{
    return (
        <AppLayout type="centered" className='bg-red-600'>
                <div className='flex flex-col items-center min-h-screen py-2 pt-20 font-mono text-white'>
                    <div className='p-10 rounded-lg shadow-lg shadow-gray-800/50 flex flex-col bg-black'>
                        <h1 className='text-xl font-medium mb-4'>Error No account connected You can not access this Page</h1>
                    </div>
                </div>
            </AppLayout >
    )}
}