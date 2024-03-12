import React, {useEffect, useState} from 'react';
import Button from '@mui/material-next/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';

export function ProductLabels(props) {

  const { complate } = useSelector((state) => state.productHierarchy)
  const complateObj = JSON.parse(localStorage.getItem("http://localhost:3000/MyFavorites")) || complate;
  let basketObj = JSON.parse(localStorage.getItem("http://localhost:3000/Basket")) || complate;
  const [favIcon, setfavIcon] = useState(1);
  const {data} = props;

  function handleIcon(selectData){
    if (favIcon)
      complateObj[JSON.parse(selectData.id)] = JSON.stringify(selectData);
    else
      delete complateObj[selectData.id];
    localStorage.setItem("http://localhost:3000/MyFavorites", JSON.stringify(complateObj));
    setfavIcon(!favIcon);
  }
  
  useEffect(() => {
    for (let key in complateObj){
      if (JSON.parse(complateObj[key]).id === data.id)
        setfavIcon(!favIcon);
    }
  }, [])

  function handleBasket(){
    basketObj[data.id] = data;
    localStorage.setItem("http://localhost:3000/Basket", JSON.stringify(basketObj))
  }


  return (
    <div style={{width:"40%",height:"60%"}} className='productRight'>
        <h1>{data.title}</h1>

        <div className="rating">
            <Rating name="half-rating-read" value={3.30} size="small" precision={0.5} readOnly />
            <span className="ratingNum">({data.rating.count}+)</span>    
        </div>

        <div className="product-bottom-details">
            <div className="product-price">{data.discount ? <small>$230.99</small> : ""}{data.price}$</div>
        </div>

        <div style={{width:"100%",height:"100%"}}>
            <Button onClick={handleBasket} sx={{width:"100%",backgroundColor:"rgb(242, 121, 25)", ":hover":{backgroundColor:"rgb(255, 139, 56)"}}} size="large" variant="filled">ADD BASKET</Button>
            <IconButton sx={{color:"rgb(242, 121, 25)"}} onClick={() => handleIcon(data)} size="large">
              {favIcon ? <FavoriteBorderIcon /> : <FavoriteIcon />}
            </IconButton>
        </div>
    </div>
  )
}
