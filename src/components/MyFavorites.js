import React from 'react'
import { WideCard } from './WideCard'
import { useSelector } from 'react-redux';
import { EmptyPage } from './EmptyPage';

export function MyFavorites() {
  
  const { listFavorite } = useSelector((state) => state.personalSpaces)

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
              !(listFavorite.length > 0)
              ? <EmptyPage parag={"favorites"} /> :
              listFavorite.map((key, index) => (
                <WideCard key={index} box={key} />
              ))
            }
  
        </main>
  
      </div>
  )
}
