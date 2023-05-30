
import Grid from '@mui/material/Grid'
import AppLayout from '../../components/Layout'
import ProductCardObj from '../../components/ProductCard';
import productData from '../../DATA/productData';
import * as React from 'react';

import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function ProductsPage() {

  const data = productData;

  return (
    <AppLayout type="centered">

      <Grid className="grid grid-cols-4">
        {data.map((slide: any) => {
          return (
            <ProductCardObj key={slide.id} param={slide}/>

          )
        })}
      </Grid>
    </AppLayout>
  )
}