import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Pending() {



    return (
        <div className="fixed z-50 bg-[#000000bf] w-screen h-screen duration-[1s] ease-in-out">
            <div className='flex items-center justify-center z-50'>
                <div className="h-28 w-28 absolute top-1/2 bg-black rounded-full animate-spin">
                <Image src='/logo.svg' alt="in btw logo" fill priority className="ease-in duration-500" />
                </div>
            </div>
        </div>
        
    )
        
}