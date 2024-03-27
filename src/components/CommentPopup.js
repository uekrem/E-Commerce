import React from 'react'
import { Grid } from '@mui/material';
import { CommentBox } from './CommentBox';
import { useSelector } from 'react-redux';

export function CommentPopup(props) {

    const { toggleModal } = props;
    const { orderDisplay } = useSelector((state) => state.personalSpaces)

  return (
    <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <Grid className="modal-content" rowGap={2} container>
          {
            orderDisplay.listProduct.map((data, index) => {
              if (!data.comment)
                return <CommentBox key={index} orderDisplay={orderDisplay} data={data} />;
              return "";
            })
          }
        </Grid>
    </div>
  )
}
