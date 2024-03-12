import React from 'react'
import { MyThumbGallery } from './MyThumbGallery';
import { ProductLabels } from './ProductLabels';
import { ProductInfo } from './ProductInfo';
import { useLocation } from 'react-router-dom';

export function ProductDetail() {

  const location = useLocation();
  const data = location.state.product;

  return (
    <div style={{
      width:"100%",  
      height:"100%",
      display:'flex',
      justifyContent:"center",
      alignItems:"start",
      paddingBottom:"100px",
      }}>

        <main style={{
          width:"75%",  
          height:"100%",
          display:'flex',
          marginTop:"30px",
          flexDirection:"column",
          }}>
            <div style={{display:'flex',flexDirection:"row"}}>
              <MyThumbGallery data={data} />

              <ProductLabels data={data} />
            </div>
          
            <ProductInfo data={data} />

        </main>

    </div>
  )
}
