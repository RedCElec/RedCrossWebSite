
import data from '../Carousel/dataCarousel';
import * as React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper";
import ProductCard from '../productCard';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




export default function CarousselTry() {


    return (
            <div className='w-11/12 pb-10'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={true}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={3}>
                            <SwiperSlide>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard/>
                            </SwiperSlide>
                            
                </Swiper>
            </div>
    )
};
