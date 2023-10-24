import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';


export default function Footer() {

const dateFromThisYear = new Date();

    return (

<div id='general' className="w-full h-50 bg-black shadow-md p-4 relative bottom-0">

    <div className="sm:flex sm:items-center sm:justify-between pb-16  ">
        <Link href="/" className="grid grid-cols-1 place-items-center mb-4 sm:mb-0">
            <Image src="/logo.svg" layout="fixed" width={100} height={100} className='mr-3 h-8 row-start-1 row-end-2' alt="replacement"/>
            <div className="self-center text-3xl font-bold text-white "> RedCrossElectronics</div>
            <div className="self-center text-white font-mono text-sm"> French handmade pedal Assembled in Lyon </div>
        </Link>
        
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 justify-center md:justify-start">
            <li>
                <Link  href="/infoAdd/PrivacyPolicy" className="mr-4 hover:text-red-600 md:mr-6">Privacy Policy</Link>
            </li>
            <li>
                <Link href="/infoAdd/Who" className="mr-4 hover:text-red-600 md:mr-6 ">Who are we ?</Link>
            </li>
            <li>
                <Link href="/infoAdd/Contact" className="hover:text-red-600">Contact</Link>
            </li>
        </ul>
    </div>
    <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">© {dateFromThisYear.getFullYear()} <a href="https://flowbite.com/" className="hover:underline">RXelectronics</a>. All Rights Reserved.
    </span>
</div>

  )

  
}

export interface Footer {}
