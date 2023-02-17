import Head from 'next/head';
import Button from '@mui/material/Button';
import { NextRouter, useRouter } from 'next/router';
import clsx from 'clsx';
import CenteredLayout from './CenteredLayout';
import { withChildren, withClassName } from '../config/withs';
import Image from 'next/image';
import Footer from './Footer';

import { useSession, signIn, signOut } from 'next-auth/react'


export type LayoutType = 'centered'

const LayoutMappings = {
  centered: CenteredLayout,
};


export default function AppLayout({

  type = 'centered', className = '', children,
}: AppLayoutProps) {

  //Hook declaration
  const Layout = LayoutMappings[type];
  const router = useRouter();
  const { data: session } = useSession()

  // variable declaration
  let state: string = '';
  let pathway: string = '';
  let userName: string;

  if (session) {
    state = 'Account';
    pathway = '/authClient/Account';
  }
  else {
    state = 'login';
    pathway = '/authClient/loginPage';
    userName = '';
  }

  return (
    <div>
      <Head>
        <title>RedCross</title>
        <meta name="description" content="To Do List application" />
        <link rel="icon" href="/logo_noir.ico" />
      </Head>

      <div className="w-full h-20 flex justify-around items-center top-0 left-0 bg-black shadow-md absolute text-white md-p4">
        <Button className=" hover:text-red-600 text-[9] md:text-sm" onClick={() => router.push('/')}>Home</Button>
        <Button className="  hover:text-red-600 text-[9] md:text-sm" onClick={() => router.push('/products')}>Products</Button>
        <div className='h-12 w-[70px] lg:h-[70px] lg:w-18 relative'>
          <Image src="/logo.svg" fill alt="bahAlors" onClick={() => router.push('/')} />
        </div>
        <Button className="  hover:text-red-600 text-[9] md:text-sm">Info</Button>

        <div className='text-white flex-none text-center w-20'>
          <Button className=" hover:text-red-600 text-[9] md:text-sm" onClick={() => router.push(pathway)}>{state}</Button>
          <div className='text-sm text-gray-500'>{session?.user?.email}</div>
        </div>
      </div>

      <main className="min-h-screen">
        <Layout className={clsx(className, 'pt-20')}>
          {children}
        </Layout>
      </main>
      <Footer />
    </div>
  );
}

export interface AppLayoutProps extends withChildren, withClassName {
  type?: LayoutType;
}
