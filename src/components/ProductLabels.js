import React from 'react';
import Button from '@mui/material-next/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { basketAdd, deleteFavorite, addFavorite } from '../stores/personalSpaces';

export function ProductLabels(props) {

  const { listFavorite } = useSelector((state) => state.personalSpaces)
  const {data} = props;
  const dispatch = useDispatch()

  async function handleIcon(){
    for (let i = 0; i < listFavorite.length; i++){
      if (listFavorite[i].data.id === data.id){
        dispatch(deleteFavorite(listFavorite[i].id))
        return;
      }
    }
    dispatch(addFavorite({
        data,
        uid: auth.currentUser.uid
    }))
  }

  function whichIcon(){
    for (let i = 0; i < listFavorite.length; i++){
        if (listFavorite[i].data.id === data.id){
          return <FavoriteIcon />;
        }
    }
    return <FavoriteBorderIcon />;
  }

  async function handleBasket(){
    dispatch(basketAdd({
      data,
      uid: auth.currentUser.uid,
      count:1,
    }))
  }


  return (

        <div style={{width:"40%",height:"60%"}} className='productRight'>
            <h1>{data.title}</h1>
            {}
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
                  {whichIcon()}
                </IconButton>
            </div>
        </div>

  )
}
