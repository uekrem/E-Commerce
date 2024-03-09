import React from 'react'

export function CarouselPaper(props) {
  return (
        <img style={{height:"340px",width:"100%",objectFit:"fill",borderRadius:"10px"}} src={props.item.src} alt=""></img>
  )
}
