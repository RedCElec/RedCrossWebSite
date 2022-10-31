
import data from './dataCarousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import { pink } from '@mui/material/colors';
import CenteredLayout from '../CenteredLayout';

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
    const interval = setInterval(()=> setIndex(count=>loop(count+1)), 5000);
    
    return()=> clearInterval(interval);
   });


    return(
        <CenteredLayout className="flex flex-row">
            <div className='items-center w-full'>
                <Image src={data[index].Image} width="300px" height="100px" layout="responsive"  objectFit="contain" alt="tusaoule"/>
            </div>
            <div>
                <IconButton  aria-label="add an alarm" onClick={()=>setIndex(count=>loop(count-1))}>
                <ArrowDropUpTwoToneIcon/>
                </IconButton>
                <IconButton aria-label="add an alarm" onClick={()=>setIndex(count=>loop(count+1))}>
                <ArrowDropDownTwoToneIcon/>
                </IconButton>
            </div>
        </CenteredLayout>
    ) 
}
