import React from 'react'
import { Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

export function OrderCard() {
  return (
    <div id='orderCard'>
        <div id="topArea">
            <div>
                <h6>Order Date</h6>
                <p>19 Ocak 2024 - 18:07</p>
            </div>
            <div>
                <h6>Order Summary</h6>
                <p>1 Teslimat, 1 Ürün</p>
            </div>
            <div>
                <h6>Buyer</h6>
                <p>Harun Utku Ekrem</p>
            </div>
            <div>
                <h6>Total</h6>
                <p>119,89$</p>
            </div>
            <div>
                <Button sx={{width:"100%",backgroundColor:"rgb(242, 121, 25)", color:"white", ":hover":{backgroundColor:"rgb(255, 139, 56)"}}} size="large" variant="filled">Details</Button>
            </div>
        </div>
        <div id="bottomArea">
            <div id="orderCargo">
                <h4> <CheckIcon sx={{width:"20px"}} /> Was Delivered</h4>
                <p>1 product was delivered on January 23</p>
            </div>
            <div id="orderImg">
                <img src='https://i.imgur.com/xdbHo4E.png' alt=''/>
            </div>
        </div>
    </div>
  )
}
