
import AppLayout from '../../components/Layout';
import React, { useState } from 'react';
import CardBasket from '@/components/Cart/CardBasket';
import prisma from '@/prismadb';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import { Button } from "@mui/material";
import router from 'next/router';



export default function Page({ cartProducts, userId }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const refreshData = () => {
        router.replace(router.asPath);
      }

    const arrayProduct = cartProducts;
    let priceTotal = 0;

    if (arrayProduct !== undefined){
       priceTotal = arrayProduct.reduce((starter: any, current: any)=> starter + current.price, 0)
    }

    
    if (arrayProduct !== undefined) return (

        <AppLayout type="centered" className="flex-col gap-2">

            <div className='flex flex-col w-full py-4 px-12'>
                <h1 className='text-4xl font-mono'>Basket</h1>
                <h3 className='text-red-600'>for id:{userId}</h3>
            </div>

            <div className='w-full h-full flex self-start pb-6 gap-4 px-6'>

            <div className='w-4/6 h-full'>
                {arrayProduct.map((item: InferGetServerSidePropsType<typeof getServerSideProps>, index: number) => {

                    return (<CardBasket props={item} userId={userId} refreshFct={refreshData} key={index}></CardBasket>)
                })
                }
            </div>

                <div className="flex flex-col h-4/6 w-2/6 self-start font-mono shadow-md shadow-grey-700 shadow-lg p-8 rounded-lg mt-2">

                    <h1 className='text-3xl mb-3 font-bold'>Total</h1>
                    <h2 className='mb-2 text-neutral-800 text-xl '>Prix: {priceTotal} € </h2>
                    <h3 className='text-sm text-neutral-600 mb-2'>Nombre d&#39;articles: {arrayProduct.length} </h3>

                    <hr className=" border-t border-black w-full my-4 mr-auto ml-auto"/>

                    <Button variant="contained" className="text-white bg-red-600 h-14 w-full text-xl p-2 font-bold rounded-md font-mono mr-4 my-4">
                        Passer Commande
                    </Button>

                    <h1 className='text-2xl'>Livraison</h1>
                    <div className='flex justify-between'>
                        <h3 className='text-sm text-neutral-600'>Frais de livraison </h3>
                        <p className='text-sm text-neutral-600'> xxx €</p>
                    </div>
                </div>
            </div>

        </AppLayout>
    )
    else return (<AppLayout type="centered" className="flex flex-col gap-4">
        <div>No connected account</div>
    </AppLayout>)
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const session: Session | null = await getSession(context);

    let userId: string = "";

    if (session === null) {
        userId = "";
        const nullArray = {};
        return { props: { nullArray, userId } };
    }

    else {

        userId = session?.user.id;

        const cartsCollection = await prisma.cart.findMany({
            where: {
                userId: userId
            },
        })

        const cartProductPromise = cartsCollection.map((cartProduct) => prisma.product.findUnique({
            where: {
                id: cartProduct.productId
            }
        }))

        const cartProducts = await Promise.all(cartProductPromise);
        

        return { props: { cartProducts, userId } };
    }
}