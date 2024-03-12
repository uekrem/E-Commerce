import React from 'react'
import Rating from '@mui/material/Rating';
import Button from '@mui/material-next/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { setRepeat } from '../stores/productHierarchy';

export function WideCard(props) {

    const { complate } = useSelector((state) => state.productHierarchy)
    const dispatch = useDispatch();
    let {data, repeat} = props;
    data = JSON.parse(data);
    let complateObj = JSON.parse(localStorage.getItem("http://localhost:3000/MyFavorites")) || complate;
    let basketObj = JSON.parse(localStorage.getItem("http://localhost:3000/Basket")) || complate;

    function favDelete(){
        delete complateObj[data.id];
        localStorage.setItem("http://localhost:3000/MyFavorites", JSON.stringify(complateObj));
        dispatch(setRepeat(!repeat));
    }

    function handleBasket(){
        basketObj[data.id] = data;
        localStorage.setItem("http://localhost:3000/Basket", JSON.stringify(basketObj))
    }

  return (
    <div id='wideCard'>
        <div className="badge"> 
            <IconButton onClick={favDelete} sx={{color:"rgb(241, 122, 26)",transform:"scale(0.9)",boxShadow: "0 2px 7px #dfdfdf"}} aria-label="favorite" size='large'><FavoriteIcon /></IconButton>
        </div>
        <div id="wideCardImg">
            <img src={data.image} alt=""></img>
        </div>
        <div id="wideCardInfo">
            <h4>{data.title}</h4>
            <div className="rating">
                <Rating name="half-rating-read" value={parseFloat(data.rating.rate)} size="small" precision={0.5} readOnly />
                <span className="ratingNum">({data.rating.count}+)</span>  
            </div>
            <div className="product-bottom-details product-bottom-location">
            <div className="product-price"> {data.discount ? <small>$230.99</small> : ""}{data.price}$</div>
                <Button onClick={handleBasket} size="large" variant="filled">ADD BASKET</Button>
            </div>
        </div>
    </div>
  )
}
