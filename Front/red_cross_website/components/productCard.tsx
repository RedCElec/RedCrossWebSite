
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


export default function productCard ({param}) {

    return(

    <Card  className="">
        <CardActionArea>
            <CardMedia component="img" height="340" image={param.image} />
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