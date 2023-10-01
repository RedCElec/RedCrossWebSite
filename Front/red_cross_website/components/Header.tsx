import router from "next/router"
import Button from '@mui/material/Button';
import Image from 'next/image';


export default function Header(session_exp){

    let state: string = "";
    let pathway: string = "";
    let userName: string;

    if (session_exp) {
      state = "Account";
      pathway = "/authClient/Account";
    } else {
      state = "login";
      pathway = "/authClient/loginPage";
      userName = "";
    }

    return(
        
        <div className=" w-full h-20 flex justify-around items-center top-0 left-0 bg-black shadow-md absolute text-white font-bold md-p4">
        <Button className="hover:text-red-600 text-[9] md:text-sm font-mono" onClick={() => router.push('/')}>Home</Button>
        <Button className="  hover:text-red-600 text-[9] md:text-sm font-mono" onClick={() => router.push('/products')}>Products</Button>
        <div className='h-12 w-[70px] lg:h-[70px] lg:w-18 relative'>
          <Image src="/logo.svg" fill alt="bahAlors" onClick={() => router.push('/')} />
        </div>
        <Button className="  hover:text-red-600 text-[9] md:text-sm font-mono">Info</Button>

        <div className='text-white flex-none text-center w-20'>
          <Button className=" hover:text-red-600 text-[9] md:text-sm font-mono" onClick={() => router.push(pathway)}>{state}</Button>
          <div className='text-sm text-gray-500'>{session_exp?.user?.email}</div>
        </div>
      </div>
    )
}