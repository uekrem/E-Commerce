import React from 'react'
import { WideCard } from './WideCard'
import { useSelector } from 'react-redux';
import { EmptyPage } from './EmptyPage';

export function MyFavorites() {
  
  const { repeat } = useSelector((state) => state.productHierarchy)

  if(!(JSON.parse(localStorage.getItem("http://localhost:3000/MyFavorites"))))
    return;
  
  const selectProduct = JSON.parse(localStorage.getItem("http://localhost:3000/MyFavorites"));
  const keys = Object.keys(selectProduct);

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
            alignItems:"center",
            justifyContent:"center",
            marginTop:"30px",
            flexWrap:"wrap",
            columnGap:"40px",
            rowGap:"40px",
            }}>
              
            {
              !Object.keys(selectProduct).length 
              ? <EmptyPage parag={"favorites"} /> :
              keys.map((key, index) => (
                <WideCard key={index} data={selectProduct[key]} repeat={repeat} />
              ))
            }
  
        </main>
  
      </div>
  )
}
