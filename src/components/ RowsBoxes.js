import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { rowBoxData } from '../data/campaignData';

export function  RowsBoxes() {
  return (
    <div className="rowsBoxes"> 
        {rowBoxData.map(element => {
            return (
                <Card sx={{ maxWidth: "31%"}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="170"
                        image={element.src}
                        alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
            )
        })}
    </div>
  )
}
