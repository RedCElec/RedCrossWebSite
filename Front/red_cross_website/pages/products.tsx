import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import AppLayout from '../components/Layout'
import ProductCard from '../components/productCard';
import productData  from '../components/productData';
import * as React from 'react';

export default function ProductsPage() {

  const data: any = productData;


    return (
      <AppLayout type="centered">
        
        <Grid>
          <ProductCard/>
          <ProductCard/>
        </Grid>
      </AppLayout>
    )
}