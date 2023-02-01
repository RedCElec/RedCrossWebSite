
import data from './dataCarousel';
import Image from 'next/legacy/image';
import * as React from "react";
import CenteredLayout from '../CenteredLayout';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function CarousselTry() {


    return (
        <CenteredLayout className="flex flex-row relative">
            <div className='overflow-hidden items-center w-full'>
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
                                <Image src={slide.image} width={500} height={200} layout="responsive" alt="error" />
                            </SwiperSlide>
                        )
                    }
                    )}
                </Swiper>
                <div className="absolute bottom-0 left-0 right-0 top-1/2 flex items-center justify-center ">
                    <div className="bg-red-600 opacity-50 hover:opacity-100 p-1 text-center z-10 text-3xl pb-2 font-mono">
                        Discover new sound - get RCross Pedal
                        <div className="text-sm"> info There</div>
                    </div>
                    
                </div>
            </div>

        </CenteredLayout>
    )
};
