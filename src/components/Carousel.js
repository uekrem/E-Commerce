import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { CarouselPaper } from './CarouselPaper'
import { campaignData } from '../data/campaignData'

export function MyCarousel()
{
    return (
        <Carousel sx={{ 
            width:"65%",
            display:"flex",
            flexDirection:"column",
            marginBottom:"50px",
            }}>
            {
                campaignData.map( (item, i) => <CarouselPaper key={i} item={item} /> )
            }
        </Carousel>
    )
}
