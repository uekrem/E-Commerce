import React, { useContext, useState } from 'react'
import { WideCardSearch } from './WideCardSearch';
import { Context } from '../context/Context.js';

export function SearchResults() {
  
  const { location } = useContext(Context);
  const data = location.state.filterSearch;
  const [repeat, setRepeat] = useState(0);

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
          flexDirection:"row",
          marginTop:"30px",
          flexWrap:"wrap",
          columnGap:"40px",
          rowGap:"40px",
          }}>
            {data.map(function(element){
              return (<WideCardSearch  rep={repeat} setRep={setRepeat} data={element}/>)
            })}
        </content>

    </div>
  )
}
