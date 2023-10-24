import AppLayout from "../../components/Layout";
import ProductCardObj from "../../components/productCard";
import productData from "../../DATA/productData";
import Pending from "../../components/Animation/Pending"
import * as React from "react";
import { useState, useEffect,SetStateAction } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SideBar from "@/components/Structural/SideBarLeft";
import SideBarTop from "@/components/Structural/SideBarTop";
import axios from "axios";
import {useSession} from 'next-auth/react'
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Session, getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]";
import prisma from '@/prismadb'



export default function ProductsPage({ productCollection }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  
  const nbOfCard: number = 6;
  const pageMax: number = Math.ceil(productData.length/nbOfCard);
  //let arrayStarter: number = 0;
  
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState(true);
  const [pageNav, setPageNav] = useState(1);
  const [dataArray, setDataArray] = useState(productData.slice(0, nbOfCard));



  const { data: session } = useSession()
  const id = session?.user.id
  

  const formData = {
    title: "titre",
    description: "une desc",
    category: "une cate",
    price: 200,
    image: "/testPedal.jpg",
    userId:id,
    rating: 5,
    height: 300,
    width: 300,
  };

  const postData = async () => {
    
    if (session) {
      try {
        const response = await axios.post('/api/product/route', formData)

        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    else {
      console.log("no session at all");
    }
  }

  // END OF TEST

  
  const pageNumber = (dir: boolean, pageMax: number) => {

    if (dir === true && pageNav <= pageMax) {
      setPageNav(pageNav + 1);
    }
    else if (dir === false && pageNav > 1) {
      setPageNav(pageNav - 1);
    }
  }

  useEffect(() => {

   setDataArray(productData.slice(nbOfCard * (pageNav - 1), nbOfCard * (pageNav)))

  }, [pageNav])


  return (
    
    <>
    {loading ? <Pending/> : <></>}
    <AppLayout type="centered" >
     
      <div className="flex flex-wrap py-4 font-mono justify-center z-10 w-screen h-full sticky">
      <button className="bg-red-600 text-white p-4 hover:bg-gray-800" onClick={postData}>Ajouter des produits</button>
        
       {/*<SideBar></SideBar>*/}
        <SideBarTop></SideBarTop>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-8 grow gap-4">
          {productCollection.map((item: any) => {
            
            return <ProductCardObj key={item.id} param={item} setLoading={setLoading}/>;
          })}
        </div>

        <div className="flex relative w-[95vw] h-10 border-y-2 my-16 gap-2 border-black justify-center items-center">
          <ArrowCircleLeftIcon className="hover:text-red-600" onClick={()=>pageNumber(false, pageMax)}/>
          <div>Page {pageNav}/{pageMax}</div>
          <ArrowCircleRightIcon className="hover:text-red-600" onClick={()=>pageNumber(true, pageMax)}/>
          
        </div>
      </div>

    </AppLayout>
    </>
    
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {


  const productCollection = await prisma.product.findMany({   
  })


  return { props: { productCollection } };
}