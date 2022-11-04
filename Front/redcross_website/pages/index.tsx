import type { NextPage } from 'next'
import AppLayout from '../components/Layout'
import Image from 'next/image'
import Footer from '../components/Footer'
import CarousselTry from '../components/Carousel/CarousselTry'


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
        <button>Salut</button>
          <div className='text-black max-w-xl text-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed ut aut impedit numquam, repellendus, ratione ipsa doloribus nulla corrupti quos assumenda? Iste porro veniam minima doloribus pariatur nihil nostrum!</div>
          <div className='text-black max-w-xl text-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed ut aut impedit numquam, repellendus, ratione ipsa doloribus nulla corrupti quos assumenda? Iste porro veniam minima doloribus pariatur nihil nostrum!</div>
          <div className='text-black max-w-xl text-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed ut aut impedit numquam, repellendus, ratione ipsa doloribus nulla corrupti quos assumenda? Iste porro veniam minima doloribus pariatur nihil nostrum!</div>
          <div className='text-black max-w-xl text-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed ut aut impedit numquam, repellendus, ratione ipsa doloribus nulla corrupti quos assumenda? Iste porro veniam minima doloribus pariatur nihil nostrum!</div>
          <div className='text-black max-w-xl text-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed ut aut impedit numquam, repellendus, ratione ipsa doloribus nulla corrupti quos assumenda? Iste porro veniam minima doloribus pariatur nihil nostrum!</div>
          <div className='text-black max-w-xl text-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed ut aut impedit numquam, repellendus, ratione ipsa doloribus nulla corrupti quos assumenda? Iste porro veniam minima doloribus pariatur nihil nostrum!</div>
          <div className='text-black max-w-xl text-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed ut aut impedit numquam, repellendus, ratione ipsa doloribus nulla corrupti quos assumenda? Iste porro veniam minima doloribus pariatur nihil nostrum!</div>
              
          <Image src="/logo_noir.svg" alt="This is a logo" layout="fixed" width={240} height={240} className="p-8"/>
      </AppLayout>
    </div>
  )

}

export default Home
