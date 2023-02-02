
import data from '../CarousselProduct/dataCarouselProduct';
import * as React from "react";
import { Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Pagination, FreeMode } from "swiper";
import ProductCard from '../productCard';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function CarousselTry() {


    return (
        <div className='w-11/12 pb-10'>
            <Swiper
                modules={[Navigation, Pagination, FreeMode]}
                navigation={true}
                loop={true}
                loopedSlides={10}
                freeMode={true}
                spaceBetween={40}
                slidesPerView={4}>
                {data.map((slide: any) => {
                    return (
                        <>
                            <SwiperSlide key={slide.id}>
                                <ProductCard param={slide} />
                            </SwiperSlide>
                        </>

                    )
                })}

            </Swiper>

        </div>
    )
};

