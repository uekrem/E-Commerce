import React from 'react';
import { BasketCard } from './BasketCard';
// import { MyMultiCarousel } from './MyMultiCarousel';
import { Button, Grid, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { EmptyPage } from './EmptyPage';
import { useNavigate } from 'react-router-dom';

export function Basket() {

  let result = 0;
  const navigate = useNavigate();
  const { listBasket } = useSelector((state) => state.personalSpaces)

  for(let i = 0; i < listBasket.length; i++){
    result += listBasket[i].data.price * listBasket[i].count;
  }

  function handlePayment(){
    navigate("/Payment");
  }

  return (
    <Container maxWidth="lg">
      <Grid container style={{marginTop:"30px"}}>
          { !(listBasket.length > 0) 
          ? 
            <Grid item xs={12} md={12}>
              <EmptyPage parag={"cart"} />
            </Grid>
          :
            <>
              <Grid id='basket' container item>
                <Grid id="basketList" item xs={12} md={9}>
                    {
                      listBasket.map((data, index) => (
                        <BasketCard key={index} box={data} />
                      ))
                    }
                </Grid>
                <Grid id="invoice" item xs={12} md={3}>
                  <div>
                    <h3>SELECT PRODUCT ({listBasket.length})</h3>
                    <h2>
                      {Number(result.toFixed(2)) + 3}$
                    </h2>
                  </div>
                  <Button onClick={handlePayment} size="large" variant="filled">Complete Shopping</Button>
                  <div>
                    <h5>Product: {Number(result.toFixed(2))}$ </h5>
                    <h5>Cargo: 3$ </h5>
                  </div>
                  <div>
                    <h4>Your Earnings 🥳</h4><small>0$</small>
                  </div>
                </Grid>
              </Grid>
              {/* <MyMultiCarousel title="You may like" /> */}
            </>
          }
      </Grid>
    </Container>
  )
}