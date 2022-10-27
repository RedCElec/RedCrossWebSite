import Head from 'next/head';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import CenteredLayout from './CenteredLayout';
import { withChildren, withClassName } from '../config/withs';
import Image from 'next/image'

export type LayoutType = 'centered'

const LayoutMappings = {
  centered: CenteredLayout,
};

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
      <main className="h-screen">
        <div className="w-full h-20 flex justify-around items-center top-0 left-0 bg-black shadow-md  p-4 absolute">
            <Button className="text-white hover:text-red-600" onClick={() => router.push('/')}>Home</Button>       {/*j'ai ajouté une anchor pour quand on click sur le logo c'a retourne à l'acceuil*/}
            <Image src="/logo.svg" layout="fixed" width={70} height={70} alt="bahAlors" onClick={() => router.push('/')}/> {/*Faudra mettre des alt correct mdrr*/}
            <Button className="text-white hover:text-red-600" onClick={() => router.push('/products')}>Products</Button>
        </div>
        <Layout className={clsx(className, 'pt-20')}>
          {children}
        </Layout>
      </main>

    </div>
  );
}

export interface AppLayoutProps extends withChildren, withClassName {
    type?: LayoutType;
}
