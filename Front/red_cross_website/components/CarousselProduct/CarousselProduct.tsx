

import { productType } from '../../DATA/productData';
import * as React from "react";
import { Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestCard from './testCard';
import { useState, useEffect } from 'react';

export interface combinedProps {
    numberOfCard: number | null,
    dataArray: productType[],
  }


export default function CarousselProduct (props: combinedProps):JSX.Element {

    const { dataArray , numberOfCard } = props;

    const [isDesktop, setDesktop] = useState(1);

    useEffect(() => {
        if( numberOfCard == null){
            if (window.innerWidth > 1450) {
                setDesktop(5);
            }
            else if (window.innerWidth > 800) {
                setDesktop(3);
            }
            else {
                setDesktop(2);
            }
        }
        else {
            setDesktop(numberOfCard);
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
    }, [numberOfCard]); 

    return (
        
            <Swiper
                modules={[Navigation, Pagination, FreeMode]}
                navigation={true}
                loop={true}
                loopedSlides={10}
                freeMode={true}
                slidesPerView={isDesktop}>
                
                {dataArray.map((slide, index) => {
                    return (
                        
                            <SwiperSlide key={slide.id + "_" + index}>
                                <TestCard param={slide}/>
                            </SwiperSlide>
                        

                    )
                })}
            </Swiper>


    )
};

