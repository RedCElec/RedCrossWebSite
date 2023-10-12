import { useRouter } from "next/router";
import { useState, Dispatch, SetStateAction } from 'react'
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface Props {
  key: any,
  param: any,
  setLoading: Dispatch<SetStateAction<boolean>>,
}
export default function ProductCard({ param, setLoading }:Props) {

  const router = useRouter();

  //Await Animation
  const getDomainInfo = async (path) => {
      try {
        setLoading(true); // Set loading before sending API request
          const res = await router.push(`/products/${path}`)
          const response = res; // Response received
          setLoading(false); // Stop loading
      } catch (error) {
        setLoading(false); // Stop loading in case of error
          console.error(error);
      }
  };

  
  const number: number = param.infoData.star;
  let array = [];
  let index: number = 0;

  while (index < number) {
    array.push(index);
    index++;
  }

  return (
    <div>
          
      <div
        className="flex flex-col items-center h-[50vh] sm:h-[60vw] md:h-[40vw] xl:h-[30vw] w-5/6 p-4 bg-white text-center hover:m-4 hover:bg-white ease-in-out duration-300 font-mono cursor-pointer 
        hover:shadow-[5px_5px_rgba(220,38,38,_0.4),_10px_10px_rgba(220,38,38,_0.3),_15px_15px_rgba(220,38,38,_0.2),_20px_20px_rgba(220,38,38,_0.1),_25px_25px_rgba(220,38,38,_0.05)]"
        onClick={() => getDomainInfo(param.id)}
      >
        <div className="relative w-[90%] sm:w-1/2 md:w-5/6 h-3/4 bg-black">
          <Image src={param.imageData.image} fill alt="placeholder" />
        </div>
        <div className="p-2">
          <h1 className="p-2 text-lg text-3xl font-bold ">{param.infoData.title}</h1>
          <h1>{param.infoData.description}</h1>
          <div className="grid grid-cols-2 justify-center items-center">
            <p className="font-bold">{param.infoData.price} $</p>
            <div className="flex justify-center">
              {array.map((index) => (
                <StarIcon key={index}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
