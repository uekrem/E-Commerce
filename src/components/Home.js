import { MyCarousel } from './Carousel';
import React from 'react';
import { MyMultiCarousel } from "./MyMultiCarousel.js"
import { RowsBoxes } from "./ RowsBoxes.js"
import { useSelector } from 'react-redux';
import { Grid, Container } from '@mui/material';

export function Home() {

  const { inform } = useSelector((state) => state.productHierarchy)
  
  if (inform === undefined)
    return;
  
  return (
    <Container maxWidth="lg">
        <Grid container style={{
          display:'flex',
          alignItems:"center",
          justifyContent:"start",
          marginTop:"30px",
          flexDirection:"column",
          }}>
          
          <MyCarousel />

          <MyMultiCarousel data={inform} title="Unmissable opportunities" />

          <RowsBoxes />

          <MyMultiCarousel data={inform} categ="electronics" title="Our suggestions" />

          <MyMultiCarousel data={inform} categ="jewelery" title="You may like" />

          <MyMultiCarousel data={inform} categ="women's clothing" title="Mixed selected products" />

        </Grid>
    </Container>
  )
}
