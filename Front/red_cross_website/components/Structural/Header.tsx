import router from "next/router"
import Button from '@mui/material/Button';
import Image from 'next/image';
import { signIn, useSession } from "next-auth/react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function Header(){

  
  const { data: session} = useSession();

  const nbProduct = 5
    const SignOut = () => {
      
      if(session && session.user){
          return(
              <div className='text-sm pr-2'>
                   <p onClick={()=>router.push("/authClient/accountPage")} className='cursor-pointer py-4 text-center normal-case'>{session.user.email}</p> 
              </div>
          )
      }
      return(
          <div className='text-sm pr-2'>
              <p onClick={()=>signIn()} className='whitespace-nowrap px-5 py-2 cursor-pointer normal-case'>SignIn</p>
          </div>
      )
  }
    

  return (

    <div className=" w-full h-20 top-0 left-0 bg-black absolute text-white md:text-sm text-lg font-mono font-bold grid grid-cols-5 justify-center items-center ">
      <Button className="hover:text-red-600 text-[9] md:text-sm font-mono w-12 justify-self-center" onClick={() => router.push('/')}> Home</Button>
      <div className="flex items-center text-center justify-center">
        <Button className="hover:text-red-600 text-[9] md:text-sm font-mono" onClick={() => router.push('/products')}>Products</Button>
        <div className="rounded-full bg-white text-black w-6 h-6">{nbProduct}</div>
      </div>
      <div className='h-12 w-[70px] lg:h-[70px] lg:w-18 relative justify-self-center'>
        <Image src="/logo.svg" fill alt="bahAlors" onClick={() => router.push('/')} />
      </div>
      <Button className="hover:text-red-600 text-[9] md:text-md font-mono w-12 justify-self-center" onClick={() => router.push('/authClient/basketPage')}> <ShoppingCartCheckoutIcon fontSize={'medium'}/> </Button>

      <Button className='flex h-12 hover:text-red-600 md:text-md font-mono justify-self-center'>
        <SignOut/>
        <AccountCircleIcon className="w-8 h-8 rounded-full bg-gray-800"/>
      </Button>
    </div>
  )
}

