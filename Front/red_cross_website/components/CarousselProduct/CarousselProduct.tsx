
import data from '../CarousselProduct/dataCarouselProduct';
import * as React from "react";
import { Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper";
import ProductCard from '../ProductCard';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestCard from './testCard';
import { useState, useEffect } from 'react';


export default function CarousselTry() {

    const [isDesktop, setDesktop] = useState(1);

    useEffect(() => {
        if (window.innerWidth > 1450) {
            setDesktop(5);
        }
        else if (window.innerWidth > 800) {
            setDesktop(3);
        }
        else {
            setDesktop(2);
        }

        const updateMedia = () => {
            if (window.innerWidth > 1450) {
                setDesktop(5);
            }
            else if (window.innerWidth > 800) {
                setDesktop(3);
            }
            else {
                setDesktop(2);
            }
        };

        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []); 

    return (
        <div className='w-full pb-10 bg-black'>
            <h1 className='font-mono text-2xl text-white text-center p-8'> NEWS</h1>
            <Swiper
                modules={[Navigation, Pagination, FreeMode]}
                navigation={true}
                loop={true}
                loopedSlides={10}
                freeMode={true}
                slidesPerView={isDesktop}>
                {data.map((slide: any) => {
                    return (
                        <>
                            <SwiperSlide key={slide.id}>
                                <TestCard param={slide} />
                            </SwiperSlide>
                        </>

                    )
                })}
            </Swiper>

        </div>
    )
};

