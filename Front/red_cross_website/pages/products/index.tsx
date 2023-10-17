import AppLayout from "../../components/Layout";
import ProductCardObj from "../../components/productCard";
import productData from "../../DATA/productData";
import Pending from "../../components/Animation/Pending"
import * as React from "react";
import Image from "next/image";
import { useState, useEffect,SetStateAction } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SideBar from "@/components/SideBarLeft";
import SideBarTop from "@/components/SideBarTop";



export default function ProductsPage() {


  const nbOfCard: number = 6;
  const pageMax: number = Math.ceil(productData.length/nbOfCard);
  let arrayStarter: number = 0;
  
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState(true);
  const [pageNav, setPageNav] = useState(1);
  const [dataArray, setDataArray] = useState(productData.slice(0, nbOfCard));

  
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
        
       {/* <Image src="/Zvex_logo.jpg" alt="ghjk" width={648} height={173} className="py-8"></Image>
        <Image src="/JHS_Logo.png" alt="ghjk" width={200} height={200} className="py-8"></Image>
        
      
        */}

        {/*<SideBar></SideBar>*/}
        <SideBarTop></SideBarTop>

        <div className="w-[78vw] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-8 grow gap-4">
          {dataArray.map((slide: any) => {
            
            return <ProductCardObj key={slide.id} param={slide} setLoading={setLoading}/>;
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
