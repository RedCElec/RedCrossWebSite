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
      <header>prout</header>
      <Grid>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="140" image="../static/images.jpeg"/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <footer>prout</footer>
    </CenteredLayout>
  )
}

export default Home
