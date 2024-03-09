import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';


export function MyMultiCarousel(props) {

    const {data, title, categ} = props;
    const navigate = useNavigate();

    const handleClick = (selectProduct) => {
        navigate('/ProductDetail', { state: { product: selectProduct } });
    };

    return (
        <>
            <h2 style={{marginTop:"11px", color:"rgb(72, 72, 72)"}}>{title}</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={4}
                navigation
                centeredSlides={true}
                roundLengths={true}
                style={{width:"100%", marginTop:"15px",marginBottom:"50px",backgroundColor:"white", borderRadius:"5px"}}
            >
                {data.map( eleman => {
                    return (
                        !categ || eleman.category === categ ?
                        <SwiperSlide key={eleman.id}>
                            <div onClick={() => handleClick(eleman)} className="card">
                                <div className="product-card">
                                    <div className="product-tumb">
                                        <img src={eleman.image} alt={eleman.title}></img>
                                    </div>
                                    <div className="product-details">
                                        <h4>{eleman.title}</h4>
                                        <div className="rating">
                                            <Rating name="half-rating-read" value={parseFloat(eleman.rating.rate)} size="small" precision={0.5} readOnly />
                                            <span className="ratingNum">({eleman.rating.count}+)</span>    
                                        </div>
                                        <div className="product-bottom-details">
                                            <div className="product-price"> {eleman.discount ? <small>$230.99</small> : ""}{eleman.price}$</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> :  ""
                    );
                })}
            </Swiper>
        </>
  );
}
