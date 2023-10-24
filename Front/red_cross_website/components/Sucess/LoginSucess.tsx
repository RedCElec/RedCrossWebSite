import router from "next/router"
import style from '@/styles/anim.module.css'
import Button from '@mui/material/Button';
import Image from 'next/image';

export default function Success() {

    return(

        <div className={`w-screen h-screen z-50 flex justify-center bg-black font-mono ${style.animatedBackground}`}>
            <div className="flex flex-col items-center">
                <div className=' relative h-60 w-60 my-24'>
                    <Image src='/logo.svg' alt="in btw logo" fill priority className="ease-in duration-500" />
                </div>
                <h1 className="text-5xl font-bold text-red-600 mb-8"> Successful Login </h1>

                <Button className="text-xl text-white font-mono lowercase bg-red-600/[0.8] " onClick={async()=> await router.push("/authClient/accountPage")}>Skip !</Button>
            </div>
        </div>
    )

}