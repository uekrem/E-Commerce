import React from 'react'
import { WideCard } from './WideCard'
import { useSelector } from 'react-redux';
import { EmptyPage } from './EmptyPage';
import { Grid, Container } from '@mui/material';

export function MyFavorites() {
  
  const { listFavorite } = useSelector((state) => state.personalSpaces)

  return (
    <Container maxWidth="lg">
      <Grid container style={{
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
        marginTop:"30px",
        flexWrap:"wrap",
        }}>
          {
            !(listFavorite.length > 0)
            ? <Grid item xs={12} md={12}>
                <EmptyPage parag={"favorites"} />
              </Grid> 
            :
            listFavorite.map((key, index) => (
              <Grid item xs={6} md={3}>
                <WideCard key={index} box={key} />
              </Grid>
            ))
          }
      </Grid>
    </Container>
  )
}
