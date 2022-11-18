
import type { NextPage } from 'next'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import AppLayout from '../components/Layout'

export default function productCard () {

    return(

    <Card>
        <CardActionArea>
            <CardMedia component="img" height="140" image="/images.jpeg" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        The Uncolor
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem Ipsum tah la carbonara et le cheddar dans la salle du temps
                    </Typography>
                </CardContent>
        </CardActionArea>
    </Card>
    
    )

};