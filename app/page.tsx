'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Home: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        height: {
          xs: '100vh', // Apply full viewport height on xs screens
          // sm: "auto", // Default height for sm screens and up
        },
        display: 'flex',
        justifyContent: {
          xs: 'center', // Center content horizontally on xs screens
          sm: 'flex-start', // Align to the start for sm screens and up
        },
        alignItems: {
          xs: 'center', // Center content vertically on xs screens
          sm: 'flex-start', // Align to the start for sm screens and up
        },
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: {
            xs: 'none', // hidden on extra-small screens
            md: 'block', // visible on medium screens and above
          },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={4}
        >
          <Box display="flex" gap={1} alignItems="center">
            {' '}
            <Image
              src="assets/icons/logo.svg"
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
        <Box textAlign="center">
          <Typography variant="h1" mb={1}>
            Monitor your vitals effectively
          </Typography>
          <Typography variant="h3" color="textSecondary" mb={2}>
            Get personalized health recommendations
          </Typography>
          <Image
            src="assets/images/home-image.svg"
            alt="Doctors discussing health metrics with heart symbol"
            width={600}
            height={600}
            priority
            draggable={false}
          />
          <Typography variant="body2" color="textSecondary" mt={2}>
            Track your health metrics effortlessly.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={10}
        md={4}
        mt={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Typography variant="h2" mb={1}>
          Create Account
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={3}>
          Get connect with your best doctor today.
        </Typography>

        <TextField label="Full name" margin="normal" />
        <TextField label="Email" margin="normal" />
        <TextField
          label="Create password"
          type="password"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Confirm password"
          type="password"
          fullWidth
          margin="normal"
        />
        <FormControlLabel control={<Checkbox />} label="Are you a doctor?" />
        <Button
          color="primary"
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Sign up
        </Button>
        <Typography variant="body2" color="textSecondary" align="center" my={2}>
          or connect with
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button
            type="submit"
            size="large"
            variant="outlined"
            startIcon={<GoogleIcon />}
          >
            Google
          </Button>
          <Button
            type="submit"
            size="large"
            variant="outlined"
            startIcon={<FacebookIcon />}
          >
            Facebook
          </Button>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center" my={2}>
          Already have an account?{' '}
          <Link color="primary" href="/login">
            Login
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Home;
