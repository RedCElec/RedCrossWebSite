import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { red } from '@mui/material/colors';


export default function Fade() {

    const triggerAnimation = (): void => {
        setTimeout(() => {
            setClosing(true)

        }, 2000);
    }
    const changeState = () => {
        setState2(true);
    }
    
    const [state2, setState2] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            setState2(true);
        });
        if (state2) {
            triggerAnimation();
        }
    })

    if (closing) {
        return null;
    }


    return (
        <div className={`w-full h-full absolute z-20 bg-black flex justify-center duration-[1.5s] ease-in-out ${state2 ? "opacity-0" : "opacity-100"}`}>
            <div className=" mt-auto mb-auto flex flex-col justify-center items-center mx-auto gap-6">
                <div className=' relative h-80 w-80'>
                    <Image src='/logo.svg' alt="in btw logo" fill priority className="ease-in duration-500" />
                </div>
                <Button onClick={changeState} className="bg-transparent text-md text-red-600 px-10"> Click or Scroll Down</Button>
                <ArrowCircleDownIcon sx={{ color: red[900] }}  fontSize="large" className="animate-bounce "/>
            </div>
        </div>
    )
}