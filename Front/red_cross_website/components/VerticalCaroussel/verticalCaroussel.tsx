

//Swiper Import
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import productData, { productType } from '@/DATA/productData';
import Image from 'next/image'
import c from 'clsx'



export default function VerticalCaroussel(){

    const passingData: productType[] = productData;
    const assPic: number = 3;

    const pagination = {
        clickable: true,
        renderBullet: () => {
          return '<p class="flex flex-cols bg-grey-600 gap-2 ' + c("swiper-pagination-bullet", "swiper-pagination-bullet-active") + '"> </p>';
        },
      };
    

    return (
        <Swiper
          modules={[Mousewheel, Pagination]}
          slidesPerView={1}
          direction={"vertical"}
          spaceBetween={30}
          mousewheel={true}
          pagination={pagination}
          className="scroll-pt-[20px] w-4/6 h-5/6 flex flex-cols">

          {passingData.slice(0, assPic).map((slide: any) => {
            return (

              <SwiperSlide key={slide.id} className="text-center flex justify-center items-center">
                <Image
                  src={slide.imageData.image}
                  key={slide.id}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
            )
          }
          )}
        </Swiper>
    )
}