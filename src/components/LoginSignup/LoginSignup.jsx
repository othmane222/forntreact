import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import './LoginSignup.css';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const navigate = useNavigate(); 


  const validationSchema = Yup.object().shape({
    name: action === "Sign Up" ? Yup.string().required('Name is required') : Yup.string(),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };


  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    resetForm();
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" color="primary" fontWeight="700">
          {action}
        </Typography>
        <Box
          sx={{
            width: '50px',
            height: '5px',
            backgroundColor: '#2DD4BF',
            borderRadius: '9px',
            mx: 'auto',
            mt: 1,
          }}
        />
      </Box>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            {action === "Sign Up" && (
              <Field
                as={TextField}
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name"
                name="name"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            )}

            <Field
              as={TextField}
              fullWidth
              margin="normal"
              variant="outlined"
              label="Email"
              name="email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />

            <Field
              as={TextField}
              fullWidth
              margin="normal"
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            {action === "Login" && (
              <Typography
                sx={{ textAlign: 'left', mt: 2, color: '#797979', fontSize: '14px' }}
              >
                Forgot Your Password? 
                <span 
                  onClick={() => navigate('/reset-password')}
                  style={{ color: '#4c00b4', cursor: 'pointer' }}
                >
                  {' '} Click here to Reset!
                </span>
              </Typography>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button
                variant="contained"
                sx={{
                  mr: 1,
                  bgcolor: action === "Sign Up" ? '#2DD4BF' : '#E0E0E0',
                  color: action === "Sign Up" ? '#FFF' : '#333',
                  '&:hover': {
                    bgcolor: action === "Sign Up" ? '#24bda9' : '#BDBDBD',
                  },
                }}
                onClick={() => setAction("Sign Up")}
                fullWidth
                disabled={isSubmitting || action === "Sign Up"}
              >
                Sign Up
              </Button>
              <Button
                variant="contained"
                sx={{
                  ml: 1,
                  bgcolor: action === "Login" ? '#2DD4BF' : '#E0E0E0',
                  color: action === "Login" ? '#FFF' : '#333',
                  '&:hover': {
                    bgcolor: action === "Login" ? '#24bda9' : '#BDBDBD',
                  },
                }}
                onClick={() => setAction("Login")}
                fullWidth
                disabled={isSubmitting || action === "Login"}
              >
                Login
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginSignup;