import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function EmptyPage(props) {
  return (
    <div className="emptyPage">
        <ShoppingCartIcon fontSize='0px' />
        <p>Your {props.parag} is empty</p>
    </div>
  )
}
