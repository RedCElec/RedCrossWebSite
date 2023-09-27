import AppLayout from "../../components/Layout";
import ProductCardObj from "../../components/productCard";
import productData from "../../DATA/productData";
import * as React from "react";


export default function ProductsPage() {
  const data = productData;

  return (
    <AppLayout type="centered" className="">
      
        <div className="w-4/5 grid grid-cols-3 px-24">
          {data.map((slide: any) => {
            return <ProductCardObj key={slide.id} param={slide}/>;
          })}
        </div>
        
    </AppLayout>
  );
}
