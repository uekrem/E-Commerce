import React from 'react'
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addFavorite, auth, deleteFavorite } from '../firebase';

export function WideCardSearch(props) {

    const navigate = useNavigate();
    const { data } = props;
    const { list } = useSelector((state) => state.favorite)

    const handleClick = (selectProduct) => {
        navigate('/ProductDetail', { state: { product: selectProduct } });
    };

    function whichIcon(){
        for (let i = 0; i < list.length; i++){
            if (list[i].data.id === data.id){
              return <FavoriteIcon />;
            }
        }
        return <FavoriteBorderIcon />;
    }

    async function handleIcon(){
        for (let i = 0; i < list.length; i++){
            if (list[i].data.id === data.id){
                await deleteFavorite(list[i].id)
                return;
            }
        }
        await addFavorite({
            data,
            uid: auth.currentUser.uid
        })
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
