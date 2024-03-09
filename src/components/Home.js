import { MyCarousel } from './Carousel';
import React, {useContext} from 'react';
import { Context } from '../context/Context';
import { MyMultiCarousel } from "./MyMultiCarousel.js"
import { RowsBoxes } from "./ RowsBoxes.js"

export function Home() {

  const {inform} = useContext(Context);
  
  if (inform === undefined)
    return;
  
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
          
          <MyCarousel />

          <MyMultiCarousel data={inform} title="Unmissable opportunities" />

          <RowsBoxes />

          <MyMultiCarousel data={inform} categ="electronics" title="Our suggestions" />

          <MyMultiCarousel data={inform} categ="jewelery" title="You may like" />

          <MyMultiCarousel data={inform} categ="women's clothing" title="Mixed selected products" />

        </content>

    </div>
  )
}
