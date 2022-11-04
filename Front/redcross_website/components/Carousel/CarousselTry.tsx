
import data from './dataCarousel';
import Image from 'next/image';
import { useEffect, useState} from 'react';
import * as React from "react";
import { IconButton } from '@mui/material';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import CenteredLayout from '../CenteredLayout';
import { red } from '@mui/material/colors';
import { AnyAaaaRecord } from 'dns';


export default function CarousselTry(){


    const [index, setIndex] = useState(0);

    //const [data, setInputfieldsToAdd] = React.useState(1);
    const [data6, setCommittedFieldsToAdd] = useState(0);


    function loop(count: any){
        if(count==data.length){
            return count=0;
        }
        if(count<0){
            return count=data.length -1;
        }
        return count;
    }
    useEffect(()=> {
        
    })

   useEffect(()=>{
    const interval = setInterval(()=> setIndex(count=>loop(count+1)), 7000);
    
    return()=> clearInterval(interval);
   });

    return(
        <CenteredLayout className="flex flex-row relative">
            <div className='items-center w-full'>
                <Image src={data[index].Image} width="500px" height="200px" layout="responsive"  objectFit="fill" alt="tusaoule" className=''/>
            </div>

            <div className='z-10 absolute right-0 text-white'>
            {[...Array(data.length)].map((value: undefined, index_map: number) => (
          <div id='${index_map}' key={index_map}> salut </div>
        )
        )}

            </div>
            
                <div className='z-10 absolute bottom-0'>
                    
                        <IconButton onClick={()=>setIndex(count=>loop(count-1))}>
                        <ArrowCircleDownTwoToneIcon fontSize="large" sx={{ color: red[500] }}/>
                        </IconButton>
                        <IconButton onClick={()=>setIndex(count=>loop(count+1))}>
                        <ArrowCircleUpTwoToneIcon fontSize="large" sx={{ color: red[500] }}/>
                        </IconButton>
                </div>
                
        </CenteredLayout>
    ) 
};
