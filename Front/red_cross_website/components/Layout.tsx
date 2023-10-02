import Head from 'next/head';
import clsx from 'clsx';
import CenteredLayout from './CenteredLayout';

import { withChildren, withClassName } from '../config/withs';
import Footer from './Footer';
import  Header from './Header'
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
  const { data: session } = useSession()
  

  return (
    <>
      <Head>
        <title>RedCross</title>
        <meta name="description" content="To Do List application" />
        <link rel="icon" href="/logo_noir.ico" />
      </Head>

      <Header session/>
      <main className="min-h-screen">
        <Layout className={clsx(className, 'pt-20')}>
          {children}
        </Layout>
      </main>
      <Footer />
    </>
  );
}



export interface AppLayoutProps extends withChildren, withClassName {
  type?: LayoutType ;
}

