import React from 'react'
import { OrderCard } from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { popUpShow } from '../stores/personalSpaces'
import { CommentPopup } from './CommentPopup'
import { setOrderDisplay } from '../stores/personalSpaces'

export function MyOrders() {

  const { listOrder, isPopupChanging } = useSelector((state) => state.personalSpaces)
  const dispatch = useDispatch();

  const toggleModal = (data) => {
    dispatch(setOrderDisplay(data))
    dispatch(popUpShow(isPopupChanging))
  };

  return (
    <div style={{
      width:"100%",  
      height:"100%",
      display:'flex',
      justifyContent:"center",
      alignItems:"start",
      paddingBottom:"100px",
      }}>

        <main style={{
          width:"75%",  
          height:"100%",
          display:'flex',
          alignItems:"center",
          justifyContent:"start",
          marginTop:"30px",
          flexDirection:"column",
          }}>

          {isPopupChanging && <CommentPopup toggleModal={toggleModal} /> }

          {
            listOrder.map((data, index) => {
              return <OrderCard toggleModal={toggleModal} data={data} key={index} />;
            })
          }

        </main>

    </div>
  )
}
