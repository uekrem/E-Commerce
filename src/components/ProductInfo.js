import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ProductDescriptions } from './ProductDescriptions';
import { ProductReview } from './ProductReview';

export function ProductInfo(props) {

    const [value, setValue] = React.useState(0);
    const { data } = props;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function choicePage(){
        switch(value){
            case 0:
                return <ProductDescriptions data={data} />;
            case 1:
                return <ProductReview data={data} />;
            default:
                return;
        }
    }

  return (
    <div id="productInfo">
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs 
                sx={{
                    ".Mui-selected":{
                    color:`orange`,
                    }
                }}
                value={value} 
                onChange={handleChange} 
                centered
                TabIndicatorProps={{
                    style: {
                      backgroundColor: "#F17A1A",
                      color:`orange`
                    }
                }}
                >
                <Tab label={<span style={{ color: 'rgb(255, 165, 102)' }}>Product Descriptions</span>} />
                <Tab label={<span style={{ color: 'rgb(255, 165, 102)' }}>Review</span>} />
            </Tabs>
        </Box>
        {choicePage()}
    </div>
  )
}
