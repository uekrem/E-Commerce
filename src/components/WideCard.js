import React from 'react'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../stores/personalSpaces';

export function WideCard(props) {

    let { box } = props;
    let data = box.data;
    const dispatch = useDispatch();

    async function favDelete(){
        dispatch(deleteFavorite(box.id))
    }

    // async function handleBasket(){
    //     dispatch(basketAdd({
    //         data,
    //         uid: auth.currentUser.uid,
    //         count:1,
    //     }))
    // }

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
            <div className="product-bottom-details">
                <div className="product-price"> {data.discount ? <small>$230.99</small> : ""}{data.price}$</div>
            </div>
            {/* <div className="product-bottom-details product-bottom-location">
                <div className="product-price"> {data.discount ? <small>$230.99</small> : ""}{data.price}$</div>
                <IconButton size="normal">
                  <AddShoppingCartIcon fontSize="inherit" />
                </IconButton>
            </div> */}
        </div>
    </div>
  )
}
