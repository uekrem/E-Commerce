import React from 'react'
import { MyThumbGallery } from './MyThumbGallery';
import { ProductLabels } from './ProductLabels';
import { ProductInfo } from './ProductInfo';
import { useLocation } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import ErrorPage from './ErrorPage';

export function ProductDetail() {

  const location = useLocation();
  const data = location.state ? location.state.product : "";

  if (data === "")
    return <Grid item xs={12} md={12}>
      <ErrorPage />
    </Grid>;

  return (
    <Container maxWidth="lg">
        <Grid container  style={{
          marginTop:"30px",
          flexDirection:"column",
          }}>
            <Grid item container spacing={5} style={{flexDirection:"row"}}>
              <Grid item xs={12} md={6}>
                <MyThumbGallery data={data} />
              </Grid>
              <Grid item xs={12} md={6}>
                <ProductLabels data={data} />
              </Grid>
            </Grid>
          
            <Grid item container>
              <ProductInfo data={data} />
            </Grid>
        </Grid>
    </Container>

  )
}
