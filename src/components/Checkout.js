import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';
import { addOrdering } from '../stores/personalSpaces';
import { useNavigate } from 'react-router-dom';

const steps = ['Shipping address', 'Payment details', 'Review your order'];


export function Checkout() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const { listBasket } = useSelector((state) => state.personalSpaces)
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm data={[name, setName, address, setAddress, city, setCity, country, setCountry]} />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function createOrder(){
    const currentDate = new Date();

    dispatch(addOrdering({
      data:{uid:listBasket[0].uid, 
            cargoInform:{name, address, city, country, status:0},
            orderDate: `${currentDate.getDate()} / ${currentDate.getMonth()+1} / ${currentDate.getFullYear()}`,
            listProduct:listBasket.map(item => {
              const { id, uid, ...otherProperties } = item;
              return { ...otherProperties, comment: 0 };
            })}, 
      uid:listBasket[0].uid}));
    setActiveStep(activeStep + 1);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Payment
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Thank you for choosing us. You can check your products on the My Orders page.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button onClick={() => navigate("/MyOrders")} sx={{ mt: 3, ml: 1 }}>
                    My Orders
                  </Button>
                </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={activeStep === steps.length - 1 ? createOrder : handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  disabled= {!(name.length && address.length && city.length && country.length)}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
