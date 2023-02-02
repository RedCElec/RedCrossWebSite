
import Grid from '@mui/material/Grid'
import AppLayout from '../components/Layout'
import ProductCard from '../components/productCard';
import productData from './ProductsObj/productData';
import * as React from 'react';

export default function ProductsPage() {

  const data = productData;


  return (
    <AppLayout type="centered">

      <Grid>
        {data.map((slide: any) => {
          return (
            <ProductCard key={slide.id} param={slide} />
          )
        })}
      </Grid>
    </AppLayout>
  )
}