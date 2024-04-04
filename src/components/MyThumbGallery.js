import React, {useState} from 'react'
import { FreeMode, Navigation, Thumbs, Scrollbar, A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export function MyThumbGallery(props) {

    const [thumbsSwiper, setthumbsSwiper] = useState(null);
    const { data } = props;

  return (
    <div>
        <div className='productLeft' >
            <Swiper
                spaceBetween={0}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper2'
                style={{marginBottom:"30px"}}
                >
                <SwiperSlide >
                    <img src={data.image} alt="productImage"></img>
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
