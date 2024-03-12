import React from 'react'
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton, Typography } from '@mui/material';

export function Profile() {

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
            surname: Yup
              .string('Enter your surname')
              .required('Surname is required'),
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
    <div style={{
        width:"100%",  
        height:"100%",
        display:'flex',
        justifyContent:"center",
        alignItems:"start",
        paddingBottom:"100px",
        }}>
  
        <main id="profile">

            <div id="leftProfile">
                
            <Typography sx={{color:"rgb(243, 121, 25)",paddingBottom:"10px"}} component="h1" variant="h6">
                My Membership Information
            </Typography>

                <div id="nameSurBlock">
                    <div id="nameBlock">
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
                    <div id="surBlock">
                        <label>Surname</label>
                        <TextField
                        id="name"
                        name="surname"
                        autoFocus
                        value={formik.values.surname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.surname && Boolean(formik.errors.surname)}
                        helperText={formik.touched.surname && formik.errors.surname}
                        />
                    </div>
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

                <div id="dateBlock">
                    <label>Birthday</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                    </LocalizationProvider>
                </div>

                <Button id="leftButton" size="large" variant="filled">UPDATE</Button>

            </div>

            <div id="rightProfile">

                <Typography sx={{color:"rgb(243, 121, 25)",paddingBottom:"10px"}} component="h1" variant="h6">
                    Password Update
                </Typography>

                <div>
                    <label>Current password</label>
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

                <div>
                    <label>New password</label>
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

                <div>
                    <label>New password (Again)</label>
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

                    <Button id="rightButton" size="large" variant="filled">UPDATE</Button>
                </div>
            </div>
        </main>
    </div>
  )
}
