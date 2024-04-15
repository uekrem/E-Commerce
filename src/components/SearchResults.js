import React from 'react'
import { WideCardSearch } from './WideCardSearch';
import { useLocation } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import { useSelector } from 'react-redux';

export function SearchResults() {

  const {inform} = useSelector((state) => state.productHierarchy);
  const location = useLocation();
  const data = location.state ? location.state.filterSearch : inform;  

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
                <Grid key={index} item xs={6} md={3}>
                  <WideCardSearch  key={index} data={element}/>
                </Grid>
              )
            })}
        </Grid>
    </Container>

  )
}
