import React from 'react'
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

export function ReviewCard({ data }) {

    let result = data.name.split(" ");

    function randomCensor(repeat){
      let starLen = "*";

      for (let i = 1; i < repeat; i++){
        starLen += "*"
      }
      return starLen;
    }

    function stringAvatar() {
        return {
          sx: {
            bgcolor:"rgb(145, 145, 145)",
            width: 56,
            height: 56,
          },
          children: `${result[0][0]}${result[1][0]}`,
        };
    }
    
  return (
    <div id="ReviewCard">
        <Avatar {...stringAvatar()} />
        <div id="reviewBottom">
            <div id="reviewWho">
                <Rating name="half-rating-read" value={parseInt(data.rating)} size="small" precision={1} readOnly />
                <p>{data.date}</p>
                <p>{`${result[0][0]}${randomCensor(result[0].length - 1)} ${result[1][0]}${randomCensor(result[1].length - 1)}`}</p>
            </div>
            <div id="reviewText">
                <p>{data.text}</p>
            </div>
        </div>
    </div>
  )
}
