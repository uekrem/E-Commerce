import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputAdornment, IconButton, Typography } from '@mui/material';
import { login } from "../firebase.js"
import Button from '@mui/material/Button';
import { Toaster } from 'react-hot-toast';

const defaultTheme = createTheme();

export function SignIn() {

  const [showPassword, setShowPassword] = React.useState(false)

  function handleClickShowPassword(){
    setShowPassword(!showPassword);
  };

  async function handleSignIn(email, password){
    const user = await login(email, password);
    console.log(user);
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema:
      Yup.object({
        email: Yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: Yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
      }),
  });

  return (
    <ThemeProvider theme={defaultTheme}>
        <Toaster position='top-right' />
        <div id="sayHello">
          <h3>Hello,</h3>
          <p>Log in to Trendyol or create an account, don't miss the discounts!</p>
        </div>
        <Box id="signIn">
          
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>

          <div>
            <label>E-Mail</label>
            <TextField
              id="email"
              name="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
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
          </div>
        </Box>
        <div id="choiceButton">
            <Button size="large" variant="filled" onClick={() => handleSignIn(formik.values.email, formik.values.password)}>Sign In</Button>
            <Button size="large" variant="filled">Register In</Button>
          </div>
    </ThemeProvider>
  );
}