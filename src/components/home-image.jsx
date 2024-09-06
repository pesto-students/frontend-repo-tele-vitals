'use client';

import React from 'react';
import Image from 'next/image';
import { Typography, Box } from '@mui/material';

const HomeImage = () => {
  return (
    <Box textAlign="center">
      <Typography variant="h1" mb={1}>
        Monitor your vitals effectively
      </Typography>
      <Typography variant="h3" color="textSecondary" mb={2}>
        Get personalized health recommendations
      </Typography>
      <Image
        src="/assets/images/home-image.svg"
        alt="Doctors discussing health metrics with heart symbol"
        width={600}
        height={500}
        priority
        draggable={false}
      />
      <Typography variant="body2" color="textSecondary" mt={2}>
        Track your health metrics effortlessly.
      </Typography>
    </Box>
  );
};

export default HomeImage;
