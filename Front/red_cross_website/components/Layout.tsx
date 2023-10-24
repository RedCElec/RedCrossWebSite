import Head from 'next/head';
import clsx from 'clsx';
import CenteredLayout from './CenteredLayout';

import { withChildren, withClassName } from '../config/withs';
import Footer from './Structural/Footer';
import  Header from './Structural/Header'


export type LayoutType = 'centered'

export default function AppLayout({

  type = 'centered', className = '', children,
}: AppLayoutProps) {



const LayoutMappings = {
  centered: CenteredLayout,
};

  //Hook declaration
  
  const Layout = LayoutMappings[type];
  

  return (
    <>
      <Head >
        <title>RedCross</title>
        <meta name="description" content="To Do List application" />
        <link rel="icon" href="/logo_noir.ico" />
      </Head>

      <Header/>
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

