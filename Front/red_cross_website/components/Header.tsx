import router from "next/router"
import Button from '@mui/material/Button';
import Image from 'next/image';
import HomeIcon from '@mui/icons-material/Home';
import { signIn, useSession } from "next-auth/react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";


export default function Header(){

  const [whichPage, setPage] = useState("loginPage");
  const { data: session} = useSession();
  

    const SignOut = () => {
      if(session && session.user){
          return(
              <div className='text-sm pr-2'>
                   <p onClick={()=>router.push("/authClient/accountPage")} className='cursor-pointer py-4 text-center'>{session.user.name}</p> 
              </div>
          )
      }
      return(
          <div className='text-sm pr-2'>
              <p onClick={()=>signIn()} className='whitespace-nowrap hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer'>SignIn</p>
          </div>
      )
  }
    const nbProduct: number = 5;

  return (

    <div className=" w-full h-20 top-0 left-0 bg-black absolute text-white md:text-sm font-mono font-bold grid grid-cols-5 items-center ">
      <Button className="hover:text-red-600 text-[9] md:text-sm font-mono" onClick={() => router.push('/')}> Home</Button>
      <div className="flex items-center text-center justify-center">
        <Button className="hover:text-red-600 text-[9] md:text-sm font-mono" onClick={() => router.push('/products')}>Products</Button>
        <div className="rounded-full bg-white text-black w-6 h-6">{nbProduct}</div>
      </div>
      <div className='h-12 w-[70px] lg:h-[70px] lg:w-18 relative justify-self-center'>
        <Image src="/logo.svg" fill alt="bahAlors" onClick={() => router.push('/')} />
      </div>
      <Button className="hover:text-red-600 text-[9] md:text-sm font-mono">Info</Button>

      <div  className='flex items-center hover:text-red-600 border-white hover:border-red-600'>
        <SignOut/>
        <AccountCircleIcon className="w-8 h-8 rounded-full border-2 bg-gray-800"/>
      </div>
    </div>
  )
}