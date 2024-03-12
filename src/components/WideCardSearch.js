import React from 'react'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setRepeat} from "../stores/productHierarchy"

export function WideCardSearch(props) {

    const { complate } = useSelector((state) => state.productHierarchy)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data, repeat} = props;
    let complateObj = JSON.parse(localStorage.getItem("http://localhost:3000/MyFavorites")) || complate;

    const handleClick = (selectProduct) => {
        navigate('/ProductDetail', { state: { product: selectProduct } });
    };

    function whichIcon(){
        for (let key in complateObj){
            if (JSON.parse(complateObj[key]).id === data.id)
                return <FavoriteIcon />
        }
        return <FavoriteBorderIcon />;
    }

    function handleIcon(){
        if (complateObj[JSON.parse(data.id)])
            delete complateObj[data.id];
        else
            complateObj[JSON.parse(data.id)] = JSON.stringify(data);
        localStorage.setItem("http://localhost:3000/MyFavorites", JSON.stringify(complateObj));
        dispatch(setRepeat(!repeat));
    }

  return (
    <div id='wideCard'>
        <div className="badge">
            <IconButton onClick={handleIcon} sx={{color:"rgb(241, 122, 26)",transform:"scale(0.9)",boxShadow: "0 2px 7px #dfdfdf"}} aria-label="favorite" size='large'>{whichIcon()}</IconButton>
        </div>
        <div id="wideCardImg" onClick={() => handleClick(data)}>
            <img src={data.image} alt=""></img>
        </div>
        <div id="wideCardInfo" onClick={() => handleClick(data)}>
            <h4>{data.title}</h4>
            <div className="rating">
                <Rating name="half-rating-read" value={parseFloat(data.rating.rate)} size="small" precision={0.5} readOnly />
                <span className="ratingNum">({data.rating.count}+)</span>  
            </div>
            <div className="product-bottom-details">
                <div className="product-price"> {data.discount ? <small>$230.99</small> : ""}{data.price}$</div>
            </div>
        </div>
    </div>
  )
}
