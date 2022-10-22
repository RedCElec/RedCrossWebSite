import Head from 'next/head';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import CenteredLayout from './CenteredLayout';
import { withChildren, withClassName } from '../config/withs';

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen">
        <div className="w-full h-20 flex justify-start border-b top-0 left-0 border-secondary/30 bg-black shadow-md p-4 absolute">
            <Button className="text-white" onClick={() => router.push('/')}>Home</Button>
            <Button className="text-white" onClick={() => router.push('/products')}>Products</Button>
        </div>
        <Layout className={clsx(className, 'pt-20')}>
          {children}
        </Layout>
      </main>
      <footer />
    </div>
  );
}

export interface AppLayoutProps extends withChildren, withClassName {
    type?: LayoutType;
}
