
import { useRouter } from 'next/router'
import Image from 'next/image'


export default function TestCard ({param}) {
    
    const router = useRouter();

    return(
        <button className='p-6 relative h-80 w-80 ' onClick={() => router.push(`/products/${param.id}`)}>
            <Image src={param.imageData.image} 
            fill
            priority
            quality="100"  
            sizes="((min-width: 66em) 33em, (min-width: 44em) 50em, 100em"
            alt="bahAlors" 
            className='hover:blur-sm ease-in duration-100 bg-black'/> 
            <div className='font-mono z-10 translate-y-24 text-left text-white'>
                <div className='text-2xl font-bold'> {param.infoData.title}</div>
                <div className='text-lg '> {param.infoData.description}</div>
            </div>
            
        </button>
        
    
    )
};