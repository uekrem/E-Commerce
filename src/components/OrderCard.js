import React from 'react'
import { Button, Grid } from '@mui/material'
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
    <>
        <Grid id='orderCard' container item>
            <Grid container item id="topArea">
                <Grid item xs={12} md={2}>
                    <h6>Order Date</h6>
                    <p>{data.orderDate}</p>
                </Grid>
                <Grid item xs={12} md={2}>
                    <h6>Order Summary</h6>
                    <p>1 Delivery , {data.listProduct.length} Product</p>    
                </Grid>
                <Grid item xs={12} md={2}>
                    <h6>Buyer</h6>
                    <p>{data.cargoInform.name}</p>
                </Grid>
                <Grid item xs={12} md={2}>
                    <h6>Total</h6>
                    <p>
                        {
                            data.listProduct.reduce((result, data) => result += (data.data.price * data.count), 0)
                        } $
                    </p>                
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button onClick={() => toggleModal(data)}
                        disabled={data.cargoInform.status === 2 ? false : true}
                        sx={{
                            backgroundColor: "rgb(242, 121, 25)",
                            color: "white",
                            ":hover": { backgroundColor: "rgb(255, 139, 56)" }
                        }}
                        size="large"
                        variant="filled">
                        {isPopupChanging ? "Close" : "Comment"}
                    </Button>
                </Grid>
            </Grid>

            <Grid container item id="bottomArea">
                <Grid item xs={12} sm={6}>
                    <div id="orderCargo">
                        {cargoStatus()}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div id="orderImg">
                        <img src={data.listProduct[0].data.image} alt='' />
                    </div>
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}
