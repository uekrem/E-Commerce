import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';

export default function Review() {

  const { listBasket } = useSelector((state) => state.personalSpaces)
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {listBasket.map((product) => (
          <ListItem key={product.data.description} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={`${product.data.title} (x${product.count})`} secondary={product.data.category} />
            <Typography variant="body2">{product.data.price * product.count}$</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Cargo" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            3$
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {listBasket.reduce((total, product) => total += (product.data.price * product.count) , 3)}$
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
