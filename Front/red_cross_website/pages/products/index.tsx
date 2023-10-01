import AppLayout from "../../components/Layout";
import ProductCardObj from "../../components/productCard";
import productData from "../../DATA/productData";
import * as React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function ProductsPage() {
  const data = productData;


  const [state, setState] = useState(true);

  const toggleState = () => {
    setState(!state);
  };

  return (
    
    <AppLayout type="centered" >
      
      <div className="flex flex-wrap py-4 font-mono justify-center z-10">
      
        <Image src="/Zvex_logo.jpg" alt="ghjk" width={648} height={173} className="py-8"></Image>
        
      
        <div className="flex relative w-[95vw] h-16 border-y-2 border-black justify-around items-center">
          <div className="text-black px-4 w-[10vw]">Tri</div>
          <div className="text-center w-[20vw]">Search the good product</div>
          <div className="text-black px-4 w-[10vw]">Affichage {data.length}</div>
        </div>

        {state ? <div className="flex w-[17vw] bg-black bg-clip-padding text-white px-4 m-4 text-lg">
          
          <div className="grow">
            <div> Filter</div>
            <div>
              <p>exemple 1</p>
              <p>exemple 2</p>
              <p>exemple 3</p>
              <p>exemple 4</p>
            </div>
          </div>
          <ArrowForwardIosIcon onClick={()=>{toggleState()}} className=" text-white w-10 self-center w-10 h-10 rounded-full p-2 bg-opacity-50 hover:text-white hover:bg-red-600 hover:animate-ping" />
        </div>  : <div className="w-[4vw] flex"><ArrowForwardIosIcon onClick={()=>{toggleState()}} className=" text-red-600 w-10 self-center w-10 h-10 rounded-full p-2 bg-opacity-50 hover:text-white hover:bg-red-600 hover:animate-ping z-20" /></div>}


        <div className="w-[78vw] grid grid-cols-3 py-8">
          {data.map((slide: any) => {
            return <ProductCardObj key={slide.id} param={slide} />;
          })}
        </div>

        <div className="flex relative w-[95vw] h-10 border-y-2 my-16 border-black justify-center items-center">
          <div>Page </div>
          
        </div>
      </div>

    </AppLayout>
    
    
  );
}
