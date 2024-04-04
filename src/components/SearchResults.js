import React from 'react'
import { WideCardSearch } from './WideCardSearch';
import { useLocation } from 'react-router-dom';
import { Grid, Container } from '@mui/material';

export function SearchResults() {
  
  const location = useLocation();
  const data = location.state.filterSearch;

  return (
    <Container maxWidth="lg">
        <Grid container style={{
          display:'flex',
          alignItems:"center",
          justifyContent:"center",
          marginTop:"30px",
          flexWrap:"wrap",
          }}>
            {data.map(function(element, index){
              return (
                <Grid item xs={6} md={3}>
                  <WideCardSearch  key={index} data={element}/>
                </Grid>
              )
            })}
        </Grid>
    </Container>

  )
}
