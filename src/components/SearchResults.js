import React from 'react'
import { WideCardSearch } from './WideCardSearch';
import { useLocation } from 'react-router-dom';

export function SearchResults() {
  
  const location = useLocation();
  const data = location.state.filterSearch;

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
          justifyContent:"start",
          flexDirection:"row",
          marginTop:"30px",
          flexWrap:"wrap",
          columnGap:"40px",
          rowGap:"40px",
          }}>
            {data.map(function(element, index){
              return (<WideCardSearch  key={index} data={element}/>)
            })}
        </main>

    </div>
  )
}
