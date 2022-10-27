import React from 'react';
import Image from 'next/image'


const dateFromThisYear = new Date();

export default function Footer() {
  return (


<div className="p-4 bg-black shadow md:px-6 md:py-8 ">
    <div className="sm:flex sm:items-center sm:justify-between pb-16 ">
        <a href="http://localhost:3000" className="flex items-center mb-4 sm:mb-0">
            <Image src="/logo.svg" layout="fixed" width={100} height={100} className='mr-3 h-8 p-4' alt="replacement"/>
            <span className="self-center text-2xl font-semibold  text-white"> RedCrossElectronics</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
            <li>
                <a href="#" className="mr-4 hover:text-red-600 md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:text-red-600 md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:text-red-600 md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:text-red-600">Contact</a>
            </li>
        </ul>
    </div>
    <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">© {dateFromThisYear.getFullYear()} <a href="https://flowbite.com/" className="hover:underline">RCelectronics™</a>. All Rights Reserved.
    </span>
</div>

  )
}

export interface Footer {}
