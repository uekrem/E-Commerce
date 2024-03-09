import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';

const defaultTheme = createTheme();

export function RegisterIn() {

  const [showPassword, setShowPassword] = React.useState(false)

  function handleClickShowPassword(){
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      name:"",
      department:"",
    },
    validationSchema:
      Yup.object({
        name: Yup
          .string('Enter your name')
          .required('Name is required'),
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
              helperText={formik.touched.name && formik.errors.name}
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
              helperText={formik.touched.email && formik.errors.email}
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
              helperText={formik.touched.password && formik.errors.password}
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
    </ThemeProvider>
  );
}