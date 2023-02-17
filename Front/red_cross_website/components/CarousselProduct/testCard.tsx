
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Image from 'next/image'


export default function TestCard ({param}) {

    return(
        <button className='p-6 relative h-80 w-80 '>
            <Image src={param.image} 
            fill
            priority
            quality="100"  
            sizes="((min-width: 66em) 33em, (min-width: 44em) 50em, 100em"
            alt="bahAlors" 
            className='hover:blur-sm ease-in duration-100'/> 
            <div className='font-mono z-10 translate-y-24 text-left text-white'>
                <div className='text-2xl font-bold'> {param.title}</div>
                <div className='text-lg '> {param.description}</div>
            </div>
            
        </button>
        
    
    )
};