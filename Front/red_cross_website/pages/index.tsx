import type { NextPage } from 'next'
import AppLayout from '../components/Layout'
import Image from 'next/image'
import CarousselTry from '../components/Carousel/CarousselTry'
import CarousselProduct from '../components/CarousselProduct/CarousselProduct'
import Fade from '@/components/Animation/Fade'
import data from '../DATA/productData'



type Props = {}

const Home: NextPage = (props: Props) => {

  
  const visible: boolean = true;

  return (
    <>

      {visible ? <Fade /> : <></>}

      <AppLayout type="centered" className="flex flex-col">

        <CarousselTry />

        <div className="grid grid-cols-1 md:grid-cols-2 md:p-8 gap-2 justify-items-center p-4 w-full bg-black">
          <div className='w-32 h-32 lg:w-80 lg:h-80 relative'>
            <Image src='/logo.svg' fill alt='ok'></Image>
          </div>
          <div className='text-[10px] w-1/2 md:w-full lg:text-lg font-mono text-white text-center bg-red-600 mt-auto mb-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi illo aut repudiandae illum nobis iste cupiditate. Delectus ullam architecto voluptatum natus. Eos amet sapiente, eum nisi dolore nam qui ab.</div>
        </div>

        <div className='w-full pb-10 bg-black'>
          <h1 className='font-mono text-2xl text-white text-center p-8'> NEWS</h1>
          <CarousselProduct numberOfCard={null} dataArray={data} />
        </div>

        <div className='pt-12 flex justify-between w-1/2'>
          <div className=" border-t border-red-700 w-4/6 "></div>
          <div className='h-10 w-10 lg:h-20 lg:w-20 -translate-y-2/4 px-10 lg:px-12'>
            <Image src='/logo_noir.svg' alt="in btw logo" fill className="" />
          </div>
          <div className=" border-t border-red-700 m-0 w-4/6 "></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 w-10/12 gap-6 lg:gap-0 lg:w-full pb-8'>
          <div className='flex justify-center'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vXuCTILoYZY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='flex justify-center'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/m3mdeveWEgw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

      </AppLayout>
    </>
  )

}

export default Home
