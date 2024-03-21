import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputAdornment, IconButton, Typography } from '@mui/material';
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
    <ThemeProvider theme={defaultTheme}>
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
            <NavLink to="/RegisterIn"><Button size="large" variant="filled">Register In</Button></NavLink>
          </div>
    </ThemeProvider>
  );
}