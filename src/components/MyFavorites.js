import React, {useState} from 'react'
import { WideCard } from './WideCard'

export function MyFavorites() {

  const [repeat, setRepeat] = useState(0);
  
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
  
          <content style={{
            width:"75%",  
            height:"100%",
            display:'flex',
            alignItems:"center",
            justifyContent:"start",
            marginTop:"30px",
            flexWrap:"wrap",
            columnGap:"40px",
            rowGap:"40px",
            }}>
              
            {
              keys.map((key, index) => (
                <WideCard key={index} data={selectProduct[key]} rep={repeat} setRep={setRepeat} />
              ))
            }
  
        </content>
  
      </div>
  )
}
