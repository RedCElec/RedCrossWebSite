import type { NextPage } from 'next'
import AppLayout from '../../components/Layout'
import Image from 'next/image'
import Footer from '../../components/Structural/Footer'


export default function License() {
  return (
    <div>
    <AppLayout type="centered" className="flex flex-col space-y-2">
        <h1 className='text-2xl "box-decoration-slice bg-gradient-to-r from-red-600 to-white-800 text-white px-2 ... "'>Who are we ?</h1>
        <div className=''> We are a young team of developper based in Lyon. </div>
        <div> We are Musician, Artist, engineer well you got it... </div>
        <div className='h-full'>If possible we do everything ourselves. Hence, the handmade pedal in france. You can have great pedal with great component (don t worry we use almost exclusively WIMA film capacitor) <br />
        But hey, did we mentionned that we want these pedal to last so you ll be able to repair it yourselves !!! With a dedicated kit of course we are not sadic, datasheet ? not for everyone.
        </div>
    </AppLayout>
    </div>
  )
}

