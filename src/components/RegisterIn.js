import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { VisibilityOff, Visibility, ConstructionOutlined } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';
import {register} from "../firebase.js"
import { Toaster } from 'react-hot-toast';

const defaultTheme = createTheme();

export function RegisterIn() {

  const [showPassword, setShowPassword] = React.useState(false)

  function handleClickShowPassword(){
    setShowPassword(!showPassword);
  };

  async function handleRegister(email, password){
    const user = await register(email, password);
    console.log(user);
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
        <Toaster position='top-right' />
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

          <div id="genderRadio">
            <FormLabel sx={{color:"black"}} id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup defaultValue="male" row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
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
          <Button size="large" variant="filled" onClick={() => handleRegister(formik.values.email, formik.values.password)}>Register In</Button>
    </ThemeProvider>
  );
}