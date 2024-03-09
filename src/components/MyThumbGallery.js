import React, {useState} from 'react'
import { FreeMode, Navigation, Thumbs, Scrollbar, A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export function MyThumbGallery(props) {

    const [thumbsSwiper, setthumbsSwiper] = useState(null);
    const { data } = props;

  return (
    <div className='myThumbGallery'>
        <div style={{width:"100%",height:"100%"}} className='productLeft' >
            <Swiper
                spaceBetween={0}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                style={{width:"70%"}}
                className='mySwiper2'
                >
                <SwiperSlide>
                    <img src={data.image} alt=""></img>
                </SwiperSlide>
            </Swiper>

            <Swiper
                onSwiper={setthumbsSwiper}
                slidesPerView={3}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className='mySwiper'
                style={{width:"40%"}}
            >
                <SwiperSlide>
                    <img src={data.image} alt=""></img>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
