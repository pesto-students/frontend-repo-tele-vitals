'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import { useFormik } from 'formik';
import { object, string, ref, boolean } from 'yup';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import HomeImage from '@/components/home-image';
import { authClient } from '@/lib/auth/client';
import { useUser } from '@/hooks/use-user';
import { paths } from '@/paths';

const formValidationSchema = object({
  name: string().required('Required'),
  email: string().email('Invalid email address').required('Required'),
  checked: boolean(),
  password: string().required('Required'),
  conformPassword: string()
    .required('Required')
    .oneOf([ref('password')], 'Passwords must match'),
});

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const { checkSession } = useUser();
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenConformPassword, setHiddenConformPassword] = useState(true);

  const formikForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      conformPassword: '',
      checked: false,
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      try {
        await authClient.signUp(values);

        // Refresh the auth state
        await checkSession?.();

        // Refresh the router (GuestGuard handles redirect after refresh)
        router.refresh();
      } catch (err) {
        console.error('An error occurred during sign-in:', err);
        // setIsPending(false);
      }
    },
  });
  /**
   * @function changeHidden
   * @description Toggles the visibility of the password or confirm password fields.
   */
  const changeHidden = (field: 'password' | 'conformPassword') => {
    if (field === 'password') {
      setHiddenPassword((prevState) => !prevState);
    } else if (field === 'conformPassword') {
      setHiddenConformPassword((prevState) => !prevState);
    }
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
          <Typography variant="h2">Create Account</Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Get connect with your best doctor today.
          </Typography>

          <TextField
            {...formikForm.getFieldProps('name')}
            label="Full name *"
            margin="normal"
            error={formikForm.touched.name && Boolean(formikForm.errors.name)}
            helperText={formikForm.touched.name && formikForm.errors.name}
          />
          <TextField
            {...formikForm.getFieldProps('email')}
            label="Email *"
            margin="normal"
            error={formikForm.touched.email && Boolean(formikForm.errors.email)}
            helperText={formikForm.touched.email && formikForm.errors.email}
          />
          <TextField
            {...formikForm.getFieldProps('password')}
            label="Create password *"
            type={!hiddenPassword ? 'text' : 'password'}
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
                    onClick={() => changeHidden('password')}
                    edge="end"
                    size="large"
                  >
                    {!hiddenPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            {...formikForm.getFieldProps('conformPassword')}
            label="Confirm password *"
            type={!hiddenConformPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            error={
              formikForm.touched.conformPassword &&
              Boolean(formikForm.errors.conformPassword)
            }
            helperText={
              formikForm.touched.conformPassword &&
              formikForm.errors.conformPassword
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    color="primary"
                    aria-label="toggle password visibility"
                    onClick={() => changeHidden('conformPassword')}
                    edge="end"
                    size="large"
                  >
                    {!hiddenConformPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="checked"
                checked={formikForm.values.checked}
                onChange={formikForm.handleChange}
              />
            }
            label="Are you a doctor?"
          />
          <Button
            color="primary"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Sign up
          </Button>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            my={2}
          >
            -- or connect with --
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
            Already have an account?{' '}
            <Link color="primary" href={paths.auth.signIn}>
              Login
            </Link>
          </Typography>
        </form>
      </Grid>
    </Grid>
  );
};
export default SignUpForm;
