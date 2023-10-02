import AppLayout from "../../components/Layout";
import ProductCardObj from "../../components/productCard";
import productData from "../../DATA/productData";
import Pending from "../../components/Animation/Pending"
import * as React from "react";
import Image from "next/image";
import { useState, useEffect,SetStateAction } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


export default function ProductsPage() {
  const data = productData;

  const [loading, setLoading] = useState(false)
  const [state, setState] = useState(true);

  const toggleState = () => {
    setState(!state);
  };

  return (
    
    <>
    {loading ? <Pending/> : <></>}
    <AppLayout type="centered" >
      
      
      <div className="flex flex-wrap py-4 font-mono justify-center z-10">
        
        <Image src="/Zvex_logo.jpg" alt="ghjk" width={648} height={173} className="py-8"></Image>
        <Image src="/JHS_Logo.png" alt="ghjk" width={200} height={200} className="py-8"></Image>
        
      
        <div className="flex relative w-[95vw] h-16 border-y-2 border-black justify-around items-center">
          <div className="text-black px-4 w-[10vw]">Tri</div>
          <div className="text-center w-[20vw]">Search the good product</div>
          <div className="text-black px-4 w-[10vw]">Affichage {data.length}</div>
        </div>

        {state ? <div className="flex w-[17vw] bg-black bg-clip-padding text-white px-2 text-lg">
          
          <div className=" flex flex-col w-full gap-2 text-lg font-mono">
              <div className="font-bold text-2xl p-4">Filter</div>
              <div className="flex gap-2 items-center hover:text-red-600 hover:scale-120 hover:translate-x-2 cursor-pointer transition ease-in-out delay-100 ">
                <div className="h-10 w-10">
                  <Image src="/Filter/Orange-Icon-Gain-1030x1030.png" width={800} height={600} alt="placeholder" className="invert"/>
                </div>
                <p>Drive</p>
              </div>
              <div className="flex gap-2 items-center hover:text-red-600 hover:scale-110 hover:translate-x-2 cursor-pointer transition ease-in-out delay-100 ">
                <div className="h-10 w-10">
                  <Image src="/Filter/Orange-Icon-Volume.png" width={800} height={600} alt="placeholder" className="invert"/>
                </div>
                <p>Volume</p>
              </div>
              <div className="flex gap-2 items-center hover:text-red-600 hover:scale-110 hover:translate-x-2 cursor-pointer transition ease-in-out delay-100 ">
                <div className="h-10 w-10">
                  <Image src="/Filter/Orange-Icon-Treble-1500x1500.png" width={800} height={600} alt="placeholder" className="invert"/>
                </div>
                <p>Equalizer</p>
              </div>
              
              
            
            <div>Nouveauté</div>
          </div>
          <ArrowForwardIosIcon onClick={()=>{toggleState()}} className=" text-white w-10 self-center w-10 h-10 rounded-full p-2 bg-opacity-50 hover:text-white hover:bg-red-600 hover:animate-ping" />
        </div>  : <div className="w-[4vw] flex"><ArrowForwardIosIcon onClick={()=>{toggleState()}} className=" text-red-600 w-10 self-center w-10 h-10 rounded-full p-2 bg-opacity-50 hover:text-white hover:bg-red-600 hover:animate-ping z-20" /></div>}


        <div className="w-[78vw] grid grid-cols-3 py-8">
          {data.map((slide: any) => {
            return <ProductCardObj key={slide.id} param={slide} setLoading={setLoading}/>;
          })}
        </div>

        <div className="flex relative w-[95vw] h-10 border-y-2 my-16 gap-2 border-black justify-center items-center">
          <ArrowCircleLeftIcon className="hover:text-red-600"/>
          <div>Page 1/1</div>
          <ArrowCircleRightIcon className="hover:text-red-600"/>
          
        </div>
      </div>

    </AppLayout>
    </>
    
  );
}
