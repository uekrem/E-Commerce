import * as React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputAdornment, IconButton, Typography, Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchLoginUser } from '../stores/auth.js';

const defaultTheme = createTheme();

export function SignIn() {

  const [showPassword, setShowPassword] = React.useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClickShowPassword(){
    setShowPassword(!showPassword);
  };

  async function handleSignIn(email, password){
    const user = dispatch(fetchLoginUser({email, password}));
    if (user)
      navigate("/", { replace:true });
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema:
      Yup.object({
        email: Yup
          .string('')
          .email('')
          .required(''),
        password: Yup
          .string('')
          .min(6,"")
          .required(''),
      }),
  });

  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={defaultTheme}>

        <Grid container margin="30px 0px" flexDirection="column" justifyContent="center" alignItems="center">
          
            <Grid id="sayHello" xs={12} md={12} item>
              <h3>Hello,</h3>
              <p>Log in to Trendyol or create an account, don't miss the discounts!</p>
            </Grid>

            <Grid id="signIn" display="flex" justifyContent="center" alignItems="center" xs={12} md={4}  container item>

              <Grid xs={12} md={12} item>
                <Typography textAlign="center" component="h1" variant="h5">
                  Sign In
                </Typography>
              </Grid>

              <Grid display="flex" flexDirection="column" xs={12} md={12} item>
                <label>E-Mail</label>
                <TextField
                  id="email"
                  name="email"
                  autoFocus
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid display="flex" flexDirection="column" xs={12} md={12} item>
                <label>Password</label>
                <TextField
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                          sx={{backgroundColor:"rgb(250, 250, 250)"}}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
              <Button id="signButton" variant="contained" onClick={() => handleSignIn(formik.values.email, formik.values.password)}>Sign In</Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body1" align="center">
              Don't you have an account? <NavLink to="/RegisterIn">Register In</NavLink>
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}