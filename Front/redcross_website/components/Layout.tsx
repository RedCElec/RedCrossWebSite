import Head from 'next/head';
import { Button } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';
import clsx from 'clsx';
import CenteredLayout from './CenteredLayout';
import { withChildren, withClassName } from '../config/withs';
import Image from 'next/image';
import Footer from './Footer';
import Dropdown from './DropDown';
import LoginPage from '../pages/loginPage';
import { AnyTxtRecord } from 'dns';


export type LayoutType = 'centered'

const LayoutMappings = {
  centered: CenteredLayout,
};

let state: boolean = false;
let gif: string = '';


const ifConnected = (state: boolean): string =>{
  if(state){
    return gif='Account';
  }

    return gif='Login';
}

const handleConnectionRoute = (state: boolean): string => {
  if(state){
    return '/'
  }
  return '/loginPage';
}

export default function AppLayout({
  type = 'centered', className = '', children,
}: AppLayoutProps) {
  const Layout = LayoutMappings[type];
  const router = useRouter();


  return (
    <div>
      <Head>
        <title>RedCross</title>
        <meta name="description" content="To Do List application" />
        <link rel="icon" href="/logo_noir.ico" />
      </Head>
      
        <div className="w-full h-20 flex justify-around items-center top-0 left-0 bg-black shadow-md p-4 absolute">
            <Button className="text-white hover:text-red-600" onClick={() => router.push('/')}>Home</Button>  
            <Button className="text-white hover:text-red-600" onClick={() => router.push('/products')}>Products</Button>    
            <Image src="/logo.svg" layout="fixed" width={70} height={70} alt="bahAlors" onClick={() => router.push('/')}/> {/*Faudra mettre des alt correct mdrr*/}
            <Button className="text-white hover:text-red-600">Info</Button>      
            <Button className="text-white hover:text-red-600 flex-none" onClick={() => router.push(handleConnectionRoute(state))}>{ifConnected(state)}</Button>
        </div>

        <main className="min-h-screen">
        <Layout className={clsx(className, 'pt-20')}>
          {children}
        </Layout>
      </main>
      <Footer/>
    </div>
  );
}

export interface AppLayoutProps extends withChildren, withClassName {
    type?: LayoutType;
}
