

//REACT + NEXTJS IMPORT
//import required modules

import AppLayout from "../../components/Layout";
import productData, { productType } from "../../DATA/productData";
import { useRef } from "react";
import * as React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
// IMPORT REACT COMPONENT
import CarousselProduct from "@/components/CarousselProduct/CarousselProduct";
import AddToBasket from "@/components/Cart/AddToBasket"

//MUI ICON IMPORT
import { Button } from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";



import prisma from '@/prismadb';


import VerticalCaroussel from "@/components/VerticalCaroussel/verticalCaroussel";


interface ProductsIDProps {
  data: any
}

const ProductsID: NextPage<ProductsIDProps, productType> = ({ data }) => {

  const useScroll = () => {
    const elRef = useRef<HTMLDivElement>(null);

    const executeScroll: any = () => {
      if (elRef.current != null) {
        elRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    return [executeScroll, elRef];
  };


  const router = useRouter();
  const { id } = router.query;
  const item = data
  const passingData: productType[] = productData;
  const [executeScroll, elRef] = useScroll();




  if (!item) {
    return <div>Item not found!</div>;
  }

  return (
    <AppLayout type="centered" className="flex flex-col font-mono">
      <div className="grid grid-cols-2 w-[80vw] h-[78vh] pt-12 justify-end z-10">

        <VerticalCaroussel></VerticalCaroussel>

        <div>
          <h1 className="text-5xl font-bold">{item.title} </h1>
          <h2 className="text-3xl font-semi">Précision de catégorie</h2>
          <div>Nombre d étoile</div>

          <div>
            <div className="my-2">
              {item.description}
            </div>
          </div>

          <h1 className="text-2xl font-semi">{item.price} $</h1>

          <div className="py-8 justify-center">
            <AddToBasket productId={data.id}></AddToBasket>
            <Button variant="contained" className=" text-white rounded-md bg-red-600 w-14 h-14 p-2"> <FavoriteIcon /> </Button>
          </div>
        </div>
      </div>

      <ArrowCircleDownIcon
        sx={{ color: red[700] }}
        fontSize="large"
        className="animate-bounce justify-self-center cursor-pointer hover:animate-none p-0"
        onClick={executeScroll}
      />
      <p className="justify-self-center text-red-600 pb-8">more infos...</p>


      <div ref={elRef} className="h-[25vh] w-full bg-red-600 items-center">
        <h1 className="text-3xl text-white text-center">Join Us</h1>
        <p className="text-sm text-white text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
          accusamus labore velit culpa dolore neque id, reprehenderit, dolor
          nemo dolorum magni dicta officia suscipit fugit? Modi qui ipsa
          accusamus ratione.
        </p>
      </div>


      <div className='w-5/6'>
        <h1 className="text-5xl font-bold justify-start p-8">Produit Similaire</h1>
        <CarousselProduct numberOfCard={3} dataArray={passingData} />
      </div>

      <div className='py-12 flex justify-center w-1/2'>
        <div className=" border-t border-red-700 m-0 w-4/6 "></div>
      </div>

      <div className="flex flex-col w-[80vw] h-full gap-y-2 p-8">
        <h1 className="text-5xl font-bold justify-start">Media</h1>
        <p> fghjklmqsdlfgjhhjqklsdfgjhgfsgdhfjgkhlgfdksjhgfsdghjhklgkfjhgfqsdgfhgjkhl </p>
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/watch?v=C0JA07W_vRY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
        <iframe className="py-4" width="80%" height="166" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/410718369&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>
    </AppLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {

  const productCollection = await prisma.product.findMany({

  })

  const paths = productCollection.map((item: any) => ({
    params: { id: String(item.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const id: any = params?.id;

  const productFinder = await prisma.product.findUnique({
    where: {
      id: id
    }
  })

  const data = productFinder;

  return {
    props: {
      data,

    },
  };
};

export default ProductsID;
