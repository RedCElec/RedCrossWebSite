import Image from "next/image";
import AppLayout from "../../components/Layout";
import productData, { productType } from "../../DATA/productData";
import { useRef, useEffect } from "react";
import * as React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Button } from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { red } from "@mui/material/colors";

interface ProductsIDProps {
  data: productType[];
}

const useScroll = () => {
  const elRef = useRef(null);
  
  const executeScroll: any = () =>
    elRef.current.scrollIntoView({ behavior: "smooth" });

  return [executeScroll, elRef];
};

const ProductsID: NextPage<ProductsIDProps> = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  const item = data.find((item: productType) => item.id === Number(id));

  const [executeScroll, elRef] = useScroll();

  if (!item) {
    return <div>Item not found!</div>;
  }

  return (
    <AppLayout type="centered" className="flex flex-col font-mono">
      <div className="grid grid-cols-2 w-[80vw] h-full p-8 justify-end z-10">
        <div className="w-full ">
          <Image
            src={item.image}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="">
          <h1 className="text-5xl font-bold">{item.title} </h1>
          <h2 className="text-3xl font-semi">Précision de catégorie</h2>
          <div>Nombre d étoile</div>

          <div className="">
            <div className="my-10">
              Description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cupiditate placeat excepturi aspernatur dolor, hic iste
              aliquid, quisquam maxime suscipit consequatur saepe unde eveniet.
              Esse, tenetur a. Dolores exercitationem ipsa porro!
            </div>
          </div>

          <h1 className="text-2xl font-semi">{item.price} $</h1>

          <div className="py-8 justify-center">
            <Button className="text-red-600 text-3xl font-bold font-mono hover:animate-pulse">
              Ajout au Panier
            </Button>
            <Button className="text-black"> Coup de Coeur</Button>
          </div>
        </div>
      </div>

      <ArrowCircleDownIcon
        sx={{ color: red[700] }}
        fontSize="large"
        className="animate-bounce justify-self-center cursor-pointer hover:animate-none"
        onClick={executeScroll}
      />
      <h3 className="justify-self-center text-red-600">more infos...</h3>

      <div ref={elRef} className="h-[25vh] w-full bg-red-600 my-4 items-center">
        <h1 className="text-3xl text-white text-center">Join Us</h1>
        <p className="text-sm text-white text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
          accusamus labore velit culpa dolore neque id, reprehenderit, dolor
          nemo dolorum magni dicta officia suscipit fugit? Modi qui ipsa
          accusamus ratione.
        </p>
      </div>
      <div className="flex flex-col w-[80vw] h-full gap-y-2 p-8">
        <h1 className="text-5xl font-bold justify-start">Media</h1>
        <p>
          fghjklmqsdlfgjhhjqklsdfgjhgfsgdhfjgkhlgfdksjhgfsdghjhklgkfjhgfqsdgfhgjkhl
        </p>
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/m3mdeveWEgw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </AppLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = productData.map((item: productType) => ({
    params: { id: String(item.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductsIDProps> = async ({
  params,
}) => {
  const data = productData;

  return {
    props: {
      data,
    },
  };
};

export default ProductsID;
