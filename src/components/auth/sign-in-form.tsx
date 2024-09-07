'use client';
import React, { useState } from 'react';
import RouterLink from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Link from 'next/link';
import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import HomeImage from '@/components/home-image';
import { paths } from '@/paths';
import { authClient } from '@/lib/auth/client';
import { useUser } from '@/hooks/use-user';

const formValidationSchema = object({
  username: string().email('Invalid email address').required('Required'),
  password: string().required('Required'),
});

const SignInForm: React.FC = () => {
  const router = useRouter();
  const { checkSession } = useUser();
  const [hidden, setHidden] = useState<boolean>(true);
  const [isPending, setIsPending] = useState<boolean>(false);

  /**
   * @function changeHidden
   * @description Toggles the visibility of the password or confirm password fields.
   */
  const changeHidden = () => {
    setHidden(!hidden);
  };
  const formikForm = useFormik({
    initialValues: {
      username: 'himanshu@gmail.com',
      password: 'Himanshu@123',
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      try {
        setIsPending(true);
        await authClient.signInWithPassword(values);
        // console.log(error, 'dssfsdf');
        // if (error) {
          setIsPending(false);
        //   return;
        // }

        // Refresh the auth state
        await checkSession?.();

        // Refresh the router (GuestGuard handles redirect after refresh)
        router.refresh();
      } catch (err) {
        console.error('An error occurred during sign-in:', err);
        setIsPending(false);
      }
    },
  });
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
          <Typography variant="h2">Sign In</Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Get connect with your best doctor today.
          </Typography>
          <TextField
            {...formikForm.getFieldProps('username')}
            label="Registered Email *"
            margin="normal"
            error={
              formikForm.touched.username && Boolean(formikForm.errors.username)
            }
            helperText={
              formikForm.touched.username && formikForm.errors.username
            }
          />
          <TextField
            {...formikForm.getFieldProps('password')}
            label="Password *"
            type={!hidden ? 'text' : 'password'}
            fullWidth
            margin="normal"
            error={
              formikForm.touched.password && Boolean(formikForm.errors.password)
            }
            helperText={
              formikForm.touched.password && formikForm.errors.password
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    color="primary"
                    aria-label="toggle password visibility"
                    onClick={changeHidden}
                    edge="end"
                    size="large"
                  >
                    {!hidden ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box display="flex" justifyContent="flex-end">
            <Link
              style={{ textDecoration: 'none' }}
              // component={RouterLink}
              href={paths.auth.resetPassword}
              // variant="subtitle1"
            >
              Forgot password?
            </Link>
          </Box>

          <Button
            sx={{
              mt: 2,
            }}
            color="primary"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Login
          </Button>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            my={2}
          >
            -- or Sign in with --
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <Button
              type="button"
              size="large"
              variant="outlined"
              startIcon={<GoogleIcon />}
            >
              Google
            </Button>
            <Button
              type="button"
              size="large"
              variant="outlined"
              startIcon={<FacebookIcon />}
            >
              Facebook
            </Button>
          </Box>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            my={2}
          >
            Don&apos;t have an account?{' '}
            <Link color="primary" href={paths.auth.signUp}>
              Register Now
            </Link>
          </Typography>
        </form>
      </Grid>
    </Grid>
  );
};
export default SignInForm;
