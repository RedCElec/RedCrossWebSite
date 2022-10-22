import type { NextPage } from 'next'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CenteredLayout from '../components/CenteredLayout'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


const Home: NextPage = () => {
  return (

    
    <CenteredLayout title="RedCross">
    <div className="grid grid-cols-1 gap-2 justify-items-center gap-y-1">
      <div className='text-5xl font-extrabold leading-none tracking-tight font-sans'>
        <span className="box-decoration-slice bg-gradient-to-r from-red-600 to-white-300 text-white px-2 ... ">
    About Us</span>
      </div>
      <div className='text-center p-2 inline'>
        <p className='text-black font-mono'>Lorem ipsum dolor <br></br></p> 
        </div>
        <div className='text-black max-w-screen-sm text-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed ut aut impedit numquam, repellendus, ratione ipsa doloribus nulla corrupti quos assumenda? Iste porro veniam minima doloribus pariatur nihil nostrum!</div>

        
        </div>
    </CenteredLayout>
  )
}

export default Home
