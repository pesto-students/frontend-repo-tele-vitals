'use client';
import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

const ProfileContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(6),
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  marginBottom: theme.spacing(2),
}));

const Profile: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <ProfileContainer>
        <Grid container spacing={3} alignItems="center" direction="column">
          <Grid item>
            <ProfileAvatar alt="Profile Picture" src="/path-to-avatar.jpg" />
          </Grid>
          <Grid item>
            <Typography variant="h5">Himanshu Rathi</Typography>
            <Typography variant="body2" color="textSecondary">
              Himanshu@gmail.com
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center">
              A short bio about the user goes here. This section can describe
              the user's interests, job, or any other relevant details they want
              to share.
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </ProfileContainer>
    </Container>
  );
};

export default Profile;
