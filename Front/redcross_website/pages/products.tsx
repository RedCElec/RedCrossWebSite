import type { NextPage } from 'next'
import Grid from '@mui/material/Grid'
import AppLayout from '../components/Layout'
import ProductCard from '../components/productCard';
import productData  from '../components/productData';

export default function ProductsPage() {

  const data: any = productData;
  console.log(data.length);



    return (
      <AppLayout type="centered">
        
        <Grid>
          <ProductCard/>
          <ProductCard/>
        </Grid>
      </AppLayout>
    )
}