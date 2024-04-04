import React from 'react'
import { OrderCard } from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { popUpShow } from '../stores/personalSpaces'
import { CommentPopup } from './CommentPopup'
import { setOrderDisplay } from '../stores/personalSpaces'
import { Container, Grid } from '@mui/material'

export function MyOrders() {

  const { listOrder, isPopupChanging } = useSelector((state) => state.personalSpaces)
  const dispatch = useDispatch();

  const toggleModal = (data) => {
    dispatch(setOrderDisplay(data))
    dispatch(popUpShow(isPopupChanging))
  };

  return (
    <Container  maxWidth="lg">

        <Grid container style={{marginTop:"30px"}}>

          {isPopupChanging && <CommentPopup toggleModal={toggleModal} /> }

          {
            listOrder.map((data, index) => {
              return <Grid key={index} justifyContent="center" alignItems="center" container item xs={12} md={12}> 
                      <OrderCard toggleModal={toggleModal} data={data} key={index} />
                    </Grid>
            })
          }

        </Grid>

    </Container>
  )
}
