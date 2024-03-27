import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm(props) {

  const {data} = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="Name"
            name="name"
            label="Name"
            fullWidth
            value={data[0]}
            variant="standard"
            onChange={(e) => data[1](e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address"
            value={data[2]}
            fullWidth
            variant="standard"
            onChange={(e) => data[3](e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            value={data[4]}
            fullWidth
            variant="standard"
            onChange={(e) => data[5](e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            value={data[6]}
            fullWidth
            variant="standard"
            onChange={(e) => data[7](e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
