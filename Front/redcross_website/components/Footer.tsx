import React from 'react';
import Image from 'next/image';
import {useEffect, useState} from 'react';




export default function Footer() {

const dateFromThisYear = new Date();

    return (

<div id='general' className="w-full h-50 bg-black shadow-md p-4 relative bottom-0">

    <div className="sm:flex sm:items-center sm:justify-between pb-16  ">
        <a href="http://localhost:3000" className="grid grid-cols-1 flex place-items-center mb-4 sm:mb-0">
            <Image src="/logo.svg" layout="fixed" width={100} height={100} className='mr-3 h-8 row-start-1 row-end-2' alt="replacement"/>
            <div className="self-center text-3xl font-bold text-white "> RedCrossElectronics</div>
            <div className="self-center text-white font-mono text-sm"> French handmade pedal Assembled in Lyon </div>
        </a>
        
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
            <li>
                <a href="#" className="mr-4 hover:text-red-600 md:mr-6 ">About</a>
            </li>
            <li>
                <a href="/infoAdd/PrivacyPolicy" className="mr-4 hover:text-red-600 md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="/infoAdd/Who" className="mr-4 hover:text-red-600 md:mr-6 ">Who are we ?</a>
            </li>
            <li>
                <a href="/infoAdd/Contact" className="hover:text-red-600">Contact</a>
            </li>
        </ul>
    </div>
    <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">© {dateFromThisYear.getFullYear()} <a href="https://flowbite.com/" className="hover:underline">RXelectronics</a>. All Rights Reserved.
    </span>
</div>

  )

  
}

export interface Footer {}
