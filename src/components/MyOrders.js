import React from 'react'
import { OrderCard } from './OrderCard'

export function MyOrders() {
  return (
    <div style={{
      width:"100%",  
      height:"100%",
      display:'flex',
      justifyContent:"center",
      alignItems:"start",
      paddingBottom:"100px",
      }}>

        <content style={{
          width:"75%",  
          height:"100%",
          display:'flex',
          alignItems:"center",
          justifyContent:"start",
          marginTop:"30px",
          flexDirection:"column",
          }}>

          <OrderCard />

          <OrderCard />

          <OrderCard />

        </content>

    </div>
  )
}
