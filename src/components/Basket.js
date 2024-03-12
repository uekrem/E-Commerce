import React from 'react';
import { BasketCard } from './BasketCard';
// import { MyMultiCarousel } from './MyMultiCarousel';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { EmptyPage } from './EmptyPage';

export function Basket() {

  let result = 0;
  const { complate, repeat } = useSelector((state) => state.productHierarchy);
  let basketObj = JSON.parse(localStorage.getItem("http://localhost:3000/Basket")) || complate;
  const keys = Object.keys(basketObj);

  keys.map((key) => (
    result += basketObj[key].price
  ))

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
          { !Object.keys(basketObj).length ? <EmptyPage parag={"cart"} /> :
            <>
              <div id='basket'>
                <div id="basketList">
                  {
                    keys.map((key, index) => (
                      <BasketCard key={index} data={basketObj[key]} repeat={repeat} basketObj={basketObj}/>
                    ))
                  }
                </div>
    
                <div id="invoice">
                  <div>
                    <h3>SELECT PRODUCT ({Object.keys(basketObj).length})</h3>
                    <h2>
                      {Number(result.toFixed(2)) + 3}$
                    </h2>
                  </div>
                  <Button size="large" variant="filled">Complete Shopping</Button>
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