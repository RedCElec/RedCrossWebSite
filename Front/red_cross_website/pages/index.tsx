import type { NextPage } from 'next'
import AppLayout from '../components/Layout'
import Image from 'next/image'
import Sidebar from '../components/Sidebar/Sidebar'
import CarousselTry from '../components/Carousel/CarousselTry'
import CarousselProduct from '../components/CarousselProduct/CarousselProduct'


const Home: NextPage = () => {


  return (
    <div>

      <AppLayout type="centered" className="flex flex-col">
        <CarousselTry></CarousselTry>
        <div className="grid grid-cols-1 gap-2 justify-items-center pt-8 ">
          <div className='text-5xl font-extrabold leading-none tracking-tight font-sans'>
            <span className="box-decoration-slice bg-gradient-to-r from-red-600 to-white-300 text-white px-2 ... ">
              About Us
            </span>
          </div>
          <div className='text-center p-2 inline'>
            <p className='text-black font-mono'>Lorem ipsum dolor <br></br></p>
          </div>
        </div>
        <div className='text-black max-w-xl text-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed ut aut impedit numquam, repellendus, ratione ipsa doloribus nulla corrupti quos assumenda? Iste porro veniam minima doloribus pariatur nihil nostrum!</div>
        <div className='text-black max-w-xl text-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed ut aut impedit numquam, repellendus, ratione ipsa doloribus nulla corrupti quos assumenda? Iste porro veniam minima doloribus pariatur nihil nostrum!</div>

        <div className='py-12 flex justify-between'>
          <div className=" border-t border-red-700 w-60"></div>
          <Image src='/logo_noir.svg' alt="in btw logo" width={100} height={100} className="-translate-y-2/4 px-4"/>
          <div className=" border-t border-red-700 m-0 w-60"></div>
        </div>

        <CarousselProduct></CarousselProduct>


        <div className='py-12 flex justify-between'>
        <div className=" border-t border-red-700 w-60"></div>
          <Image src='/logo_noir.svg' alt="in btw logo" width={100} height={100} className="-translate-y-2/4 px-4"/>
          <div className=" border-t border-red-700 m-0 w-60"></div>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-8 pb-8'>
          <div className='flex'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vXuCTILoYZY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='flex'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/m3mdeveWEgw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </AppLayout>
    </div>
  )

}

export default Home
