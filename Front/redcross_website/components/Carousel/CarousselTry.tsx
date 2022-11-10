
import data from './dataCarousel';
import Image from 'next/image';
import { useEffect, useState} from 'react';
import * as React from "react";
import { IconButton } from '@mui/material';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import CenteredLayout from '../CenteredLayout';
import { red } from '@mui/material/colors';

import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function CarousselTry(){

    const swiper = useSwiper();
    function SlideNextButton() {
        const swiper = useSwiper();
        return (
          
          <IconButton onClick={()=> swiper.slideNext(500)}>
                <ArrowCircleDownTwoToneIcon fontSize="large" sx={{ color: red[500] }}/>
            </IconButton>
        );
      }

    return(
        <CenteredLayout className="flex flex-row relative">
            <div className='overflow-hidden items-center w-full translate-y-96'>
        <Swiper 
        modules={[Navigation, Pagination, Autoplay]} 
        autoplay={{
            "delay": 4000,
            "disableOnInteraction": false
        }}
        navigation={true} 
        pagination={true}
        className="mySwiper" 
        loop={true}>
        {data.map((slide: any )=> {
                // eslint-disable-next-line react/jsx-key
                return (
                    <SwiperSlide key={slide.id}> 
                        <Image src={slide.image} width="500px" height="200px" layout="responsive" alt="error"/>
                        </SwiperSlide>
                )}
                )}
        
                {/*}  
                <div className='z-10 absolute bottom-0'>

                        <IconButton className='' onClick={()=> swiper?.slideNext()}>
                        <ArrowCircleDownTwoToneIcon fontSize="large" sx={{ color: red[500] }}/>
                        </IconButton>
                        <IconButton onClick={() => swiper?.slideNext()}>
                        <ArrowCircleUpTwoToneIcon fontSize="large" sx={{ color: red[500] }}/>
                        </IconButton>         
                        
                </div> */}
            </Swiper>
            </div>
                
        </CenteredLayout>
    ) 
};
