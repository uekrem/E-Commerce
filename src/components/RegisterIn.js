import * as React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Button from '@mui/material/Button';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputAdornment, IconButton, Grid, Container } from '@mui/material';
import { register } from "../firebase.js";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const defaultTheme = createTheme();

export function RegisterIn() {

  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  };

  async function handleRegister(email, password, name) {
    const user = await register(email, password, name);
    if (user)
      navigate("/", { replace: true });
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup
        .string()
        .required('Name is required'),
      email: Yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: values => {
      handleRegister(values.email, values.password, values.name);
    },
  });

  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={defaultTheme}>
        <Grid container margin="30px 0px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Grid id="registerIn" display="flex" justifyContent="center" alignItems="center" xs={12} md={4}  container item>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">Register In</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                type="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
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
            <Button
              fullWidth
              id="registerCompButton"
              variant="contained"
              onClick={formik.handleSubmit}
            >
              Register
            </Button>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="body1" align="center">
              Already have an account? <NavLink to="/SignIn">Sign In</NavLink>
            </Typography>
          </Grid>

        </Grid>
      </ThemeProvider>
    </Container>
  );
}
