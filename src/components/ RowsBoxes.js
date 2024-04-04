import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { rowBoxData } from '../data/campaignData';
import {Grid} from '@mui/material';

export function  RowsBoxes() {
  return (
    <Grid container sx={12} md={12} item className='rowsBoxes'>
        {rowBoxData.map((element, index) => {
            return (
                <Grid item sx={6} md={3}>
                    <Card key={index}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="170"
                            image={element.src}
                            alt="green iguana"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            )
        })}
    </Grid>
  )
}
