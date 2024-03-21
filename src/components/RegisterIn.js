import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Button from '@mui/material/Button';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';
import {register} from "../firebase.js"
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export function RegisterIn() {

  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  function handleClickShowPassword(){
    setShowPassword(!showPassword);
  };

  async function handleRegister(email, password, name){
    const user = await register(email, password, name);
    if (user)
      navigate("/", {replace:true})
  }

  const formik = useFormik({
    initialValues: {
      name:"",
      department:"",
    },
    validationSchema:
      Yup.object({
        name: Yup
          .string('')
          .required(''),
        email: Yup
          .string('')
          .email('')
          .required(''),
        password: Yup
          .string('')
          .min(6, '')
          .required(''),
      }),
  });

  return (
    <ThemeProvider theme={defaultTheme}>
        <Box id="registerIn">

          <Typography component="h1" variant="h5">
            Register In
          </Typography>

          <div>
            <label>Name</label>
            <TextField
              id="name"
              name="name"
              autoFocus
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
          </div>

          <div>
            <label>E-Mail</label>
            <TextField
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
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
              error={formik.touched.password && Boolean(formik.errors.password)}
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
          <Button size="large" variant="filled" onClick={() => handleRegister(formik.values.email, formik.values.password, formik.values.name)}>Register In</Button>
    </ThemeProvider>
  );
}