import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Context } from '../context/Context';

export function BasketCard(props) {

  const { complate } = useContext(Context)
  let { data, rep, setRep } = props;
  let basketObj = JSON.parse(localStorage.getItem("http://localhost:3000/Basket")) || complate;

  function deleteCard(){
    console.log(basketObj[data.id])
    delete basketObj[data.id];
    localStorage.setItem("http://localhost:3000/Basket", JSON.stringify(basketObj));
    setRep(!rep);
  }
  
  return (
    <div className='basketCard'>
        <div className="badge"> 
          <IconButton onClick={deleteCard} sx={{color:"rgb(241, 122, 26)",transform:"scale(0.9)",boxShadow: "0 2px 7px #dfdfdf"}} aria-label="favorite" size='large'><DeleteIcon /></IconButton>
        </div>
        <div id="basketCardImg">
            <img src={data.image} alt=''></img>
        </div>
        <div id="basketInfo">
            <h4>{data.title}</h4>
            <div className="product-bottom-details">
                <div className="product-price" style={{color:'black'}}>{data.price}$</div>
            </div>
        </div>
    </div>
  )
}
