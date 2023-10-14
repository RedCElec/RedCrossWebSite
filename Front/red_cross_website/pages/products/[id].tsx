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
import FavoriteIcon from "@mui/icons-material/FavoriteIcon";

import CarousselProduct from "@/components/CarousselProduct/CarousselProduct";
import { Swiper, SwiperSlide } from 'swiper/react';
import c from 'clsx'
import { Mousewheel, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';


// import required modules



interface ProductsIDProps {
  data: productType[];
}

const useScroll = () => {
  const elRef = useRef(null);

  const executeScroll: any = () =>
    elRef.current.scrollIntoView({ behavior: "smooth" });

  return [executeScroll, elRef];
};



const ProductsID: NextPage<ProductsIDProps, productType> = ({ data }) => {


  const router = useRouter();
  const { id } = router.query;
  const item = data.find((item: productType) => item.id === Number(id));
  const passingData: productType[] = productData;
  const [executeScroll, elRef] = useScroll();

  const pagination = {
    clickable: true,
    renderBullet: () => {
      return '<p class="flex flex-cols bg-grey-600 gap-2 ' + c("swiper-pagination-bullet", "swiper-pagination-bullet-active") + '"> </p>';
    },
  };


  if (!item) {
    return <div>Item not found!</div>;
  }

  return (
    <AppLayout type="centered" className="flex flex-col font-mono">
      <div className="grid grid-cols-2 w-[80vw] h-[78vh] pt-12 justify-end z-10">

        <Swiper
          modules={[Mousewheel, Pagination]}
          slidesPerView={1}
          direction={"vertical"}
          spaceBetween={30}
          mousewheel={true}
          pagination={pagination}
          className="scroll-pt-[20px] w-4/6 h-5/6 flex flex-cols">

          {passingData.slice(0, 3).map((slide: any) => {
            return (

              <SwiperSlide key={slide.id} className="text-center flex justify-center items-center">
                <Image
                  src={slide.imageData.image}
                  key={slide.id}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
            )
          }
          )}
        </Swiper>

        <div>
          <h1 className="text-5xl font-bold">{item.infoData.title} </h1>
          <h2 className="text-3xl font-semi">Précision de catégorie</h2>
          <div>Nombre d étoile</div>

          <div>
            <div className="my-10">
              Description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cupiditate placeat excepturi aspernatur dolor, hic iste
              aliquid, quisquam maxime suscipit consequatur saepe unde eveniet.
              Esse, tenetur a. Dolores exercitationem ipsa porro!
            </div>
          </div>

          <h1 className="text-2xl font-semi">{item.infoData.price} $</h1>

          <div className="py-8 justify-center">
            <Button variant="outlined" className="text-red-600 h-14 text-xl p-2 font-bold border-2 border-black rounded-md font-mono mr-4">
              Ajouter au Panier
            </Button>
            <FavoriteIcon className="border-2 border-black rounded-md text-red-600 w-14 h-14 p-2"></FavoriteIcon>
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
          src="https://www.youtube.com/embed/m3mdeveWEgw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
        <iframe className="py-4" width="80%" height="166" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/410718369&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
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

export const getStaticProps: GetStaticProps<ProductsIDProps> = async ({ params }) => {

  const data: productType[] = productData;

  return {
    props: {
      data,

    },
  };
};

export default ProductsID;
