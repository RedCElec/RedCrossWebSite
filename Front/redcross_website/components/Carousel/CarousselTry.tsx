
import data from './dataCarousel';
import Image from 'next/image';
import * as React from "react";
//import { IconButton } from '@mui/material';
//import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
//import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
//import { red } from '@mui/material/colors';
import CenteredLayout from '../CenteredLayout';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function CarousselTry() {


    return (
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
                    {data.map((slide: any) => {
                        // eslint-disable-next-line react/jsx-key
                        return (
                            <SwiperSlide key={slide.id}>
                                <Image src={slide.image} width="500px" height="200px" layout="responsive" alt="error" />
                            </SwiperSlide>
                        )
                    }
                    )}
                </Swiper>
            </div>

        </CenteredLayout>
    )
};
