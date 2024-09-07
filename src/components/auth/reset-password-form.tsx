'use client';
import React from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Grid, Typography, Box, TextField, Button } from '@mui/material';
import HomeImage from '@/components/home-image';
import { paths } from '@/paths';

const formValidationSchema = object({
  email: string().email('Invalid email address').required('Required'),
});

const ResetPasswordForm: React.FC = () => {
  const formikForm = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const BackToLogin = () => {
    window.location.href = paths.auth.signIn;
  };
  return (
    <Grid
      container
      direction="row"
      sx={(theme) => ({
        [theme.breakpoints.down('md')]: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      })}
      minHeight="100vh"
    >
      <Grid
        item
        xs={12}
        sx={{
          display: {
            xs: 'none', // hidden on extra-small screens
            md: 'block', // visible on medium screens and above
          },
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={2}
        >
          <Box display="flex" gap={1} alignItems="center">
            {' '}
            <Image
              src="/assets/icons/logo.svg"
              alt="Health Icon"
              width={30}
              height={30}
            />
            <Typography variant="h2">Tele Vitals</Typography>
          </Box>
          <Typography variant="subtitle1">
            Manage your health data with ease.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          display: {
            xs: 'none', // hidden on extra-small screens
            md: 'block', // visible on medium screens and above
          },
        }}
      >
        <HomeImage />
      </Grid>
      <Grid
        container
        item
        direction="column"
        xs={10}
        md={3}
        justifyContent="center"
      >
        <form onSubmit={formikForm.handleSubmit}>
          <Box mb={2}>
            <Typography variant="h3">Reset password</Typography>

            <Typography variant="subtitle1">
              Please enter your email address. We’ll send you a verification
              code to reset your password.
            </Typography>
          </Box>

          <TextField
            required
            {...formikForm.getFieldProps('email')}
            type="email"
            autoComplete="off"
            label="Enter email"
            placeholder="Enter your registered email address"
            inputProps={{
              maxLength: 50,
            }}
            error={formikForm.touched.email && !!formikForm.errors.email}
            helperText={
              formikForm.touched.email && formikForm.errors.email
                ? formikForm.errors.email
                : ''
            }
          />

          <Box
            display="flex"
            alignItems="center"
            flexGrow={1}
            flexDirection="column"
            mt={3}
            gap={2}
            justifyContent="space-between"
          >
            <Button
              size="large"
              autoFocus
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Send Verification Code
            </Button>
            <Button
              size="large"
              color="primary"
              type="button"
              variant="outlined"
              fullWidth
              onClick={BackToLogin}
            >
              Back to Login
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};
export default ResetPasswordForm;
