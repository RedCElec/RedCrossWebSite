
import data from './dataCarousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import CenteredLayout from '../CenteredLayout';
import { red } from '@mui/material/colors';


export default function CarousselTry(){


    const [index, setIndex] = useState(0);


    function loop(count: number){
        if(count==data.length){
            return count=0;
        }
        if(count<0){
            return count=data.length -1;
        }
        return count;
    }

   useEffect(()=>{
    const interval = setInterval(()=> setIndex(count=>loop(count+1)), 7000);
    
    return()=> clearInterval(interval);
   });
    return(
        <CenteredLayout className="flex flex-row relative">
            <div className='items-center w-full'>
                <Image src={data[index].Image} width="500px" height="200px" layout="responsive"  objectFit="fill" alt="tusaoule" className='hover:translate-y-12'/>
            </div>
            
                <div className='z-10 absolute bottom-0'>
                    
                        <IconButton aria-label="add an alarm" onClick={()=>setIndex(count=>loop(count-1))}>
                        <ArrowCircleDownTwoToneIcon fontSize="large" sx={{ color: red[500] }}/>
                        </IconButton>
                        <IconButton aria-label="add an alarm" onClick={()=>setIndex(count=>loop(count+1))}>
                        <ArrowCircleUpTwoToneIcon fontSize="large" sx={{ color: red[500] }}/>
                        </IconButton>
                </div>
        </CenteredLayout>
    ) 
};
