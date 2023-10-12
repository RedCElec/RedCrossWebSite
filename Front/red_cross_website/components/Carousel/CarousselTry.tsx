
import data, { carousselType } from '../../DATA/dataCarousel';
import Image from 'next/image';
import * as React from "react";
import CenteredLayout from '../CenteredLayout';
import { Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function CarousselTry() {


    return (
        <CenteredLayout className="flex flex-row relative">
            <div className='overflow-hidden items-center w-full'>
                {data.length > 0 ? 
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
                    {data.map((slide: carousselType) => {
                        
                        return (
                            <SwiperSlide key={slide.id}>
                                <div className='relative w-full lg:h-[85vh] md:h-[400px] h-[40vh]'>
                                    <Image src={slide.image} fill priority alt="error" key={slide.id}/>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    )}
                </Swiper>
                : <h1>loading error...</h1>}


                <div className="absolute bottom-0 left-0 right-0 top-1/2 flex items-center justify-center ">
                    <div className="bg-red-600 opacity-50 hover:opacity-100 p-1 text-center z-10 text-sm lg:text-2xl pb-2 font-mono">
                        Discover new sound - get RCross Pedal
                        <div className="text-sm"> info There</div>
                    </div>
                    
                </div>
            </div>

        </CenteredLayout>
    )
};
