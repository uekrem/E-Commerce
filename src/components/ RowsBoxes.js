import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { rowBoxData } from '../data/campaignData';
import {Grid} from '@mui/material';

export function  RowsBoxes() {
  return (
    <Grid container item className='rowsBoxes'>
        {rowBoxData.map((element, index) => {
            return (
                <Grid key={index} item md={3}>
                    <Card>
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
