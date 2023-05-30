
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router';



export default function ProductCard ({param}) {

    const router = useRouter();

    return(

    <Card  className="m-2" onClick={() => router.push(`/products/${param.id}`)}>
        <CardActionArea>
            <CardMedia component="img" height="400" image={param.image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="text-xl font-mono">
                        {param.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='text-sm font-mono'>
                        {param.description}
                    </Typography>
                </CardContent>
        </CardActionArea>
    </Card>
    
    )
};