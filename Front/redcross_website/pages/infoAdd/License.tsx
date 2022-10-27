import type { NextPage } from 'next'
import AppLayout from '../../components/Layout'
import Image from 'next/image'
import Footer from '../../components/Footer'


export default function License() {
  return (
    <div>
    <AppLayout type="centered" className="flex flex-col">
        <h1 className='text-2xl'>License</h1>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque illo esse enim voluptates autem dolorem reiciendis iure optio, recusandae in molestiae pariatur fuga eius saepe, quam voluptatibus? Veniam, alias dicta.</div>
    </AppLayout>
    <Footer></Footer>
    </div>
  )
}

