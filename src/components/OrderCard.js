import React from 'react'
import { Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import FeedIcon from '@mui/icons-material/Feed';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useSelector } from 'react-redux';

export function OrderCard(props) {

    const { isPopupChanging } = useSelector((state) => state.personalSpaces)
    const { data, toggleModal } = props;

    function cargoStatus(){
        if (data.cargoInform.status === 0){
            return(
            <>
                <h4> <FeedIcon sx={{width:"20px"}} /> Getting Ready</h4>
                <p>Your product is being packaged</p>
            </>);
        }
        else if (data.cargoInform.status === 1){
            return(
            <>
                <h4> <LocalShippingIcon sx={{width:"20px"}} /> Has Been Shipped</h4>
                <p>It has been shipped</p>
            </>);
        }
        else if (data.cargoInform.status === 2){
            return(
            <>
                <h4> <CheckIcon sx={{width:"20px"}} /> Was Delivered</h4>
                <p>{data.listProduct.length} product was delivered</p>
            </>);
        }
    }

  return (
    <div id='orderCard'>
        <div id="topArea">
            <div>
                <h6>Order Date</h6>
                <p>{data.orderDate}</p>
            </div>
            <div>
                <h6>Order Summary</h6>
                <p>1 Delivery , {data.listProduct.length} Product</p>
            </div>
            <div>
                <h6>Buyer</h6>
                <p>{data.cargoInform.name}</p>
            </div>
            <div>
                <h6>Total</h6>
                <p>
                    {
                        data.listProduct.reduce((result, data) => result += (data.data.price * data.count) , 0)
                    } $
                </p>
            </div>
            <div>
                <Button onClick={() => toggleModal(data)} 
                        disabled={data.cargoInform.status === 2 ? false : true} 
                        sx={{width:"100%",
                            backgroundColor:"rgb(242, 121, 25)", 
                            color:"white", ":hover":{backgroundColor:"rgb(255, 139, 56)"}}} 
                        size="large" variant="filled">
                        {isPopupChanging ? "Close" : "Comment"}</Button>
            </div>
        </div>
        <div id="bottomArea">
            <div id="orderCargo">
                {cargoStatus()}
            </div>
            <div id="orderImg">
                <img src={data.listProduct[0].data.image} alt=''/>
            </div>
        </div>
    </div>
  )
}
