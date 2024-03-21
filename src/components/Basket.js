import React from 'react';
import { BasketCard } from './BasketCard';
// import { MyMultiCarousel } from './MyMultiCarousel';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { EmptyPage } from './EmptyPage';
import { useNavigate } from 'react-router-dom';

export function Basket() {

  let result = 0;
  const navigate = useNavigate();
  const { listBasket } = useSelector((state) => state.basket)

  for(let i = 0; i < listBasket.length; i++){
    result += listBasket[i].data.price * listBasket[i].count;
  }

  function handlePayment(){
    navigate("/Payment");
  }

  return (
    <div style={{
      width:"100%",  
      height:"100%",
      display:'flex',
      justifyContent:"center",
      alignItems:"start",
      backgroundColor:"rgb(245, 245, 245)",
      paddingBottom:"100px"
      }}>

        <main style={{
          width:"75%",  
          height:"100%",
          display:'flex',
          justifyContent:"start",
          marginTop:"30px",
          flexDirection:"column",
          }}>
          { !(listBasket.length > 0) ? <EmptyPage parag={"cart"} /> :
            <>
              <div id='basket'>
                <div id="basketList">
                  {
                    listBasket.map((key, index) => (
                      <BasketCard key={index} box={key} />
                    ))
                  }
                </div>
    
                <div id="invoice">
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
                </div>
              </div>
              {/* <MyMultiCarousel title="You may like" /> */}
            </>

          }

        </main>

    </div>
  )
}