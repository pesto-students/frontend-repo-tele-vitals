'use client';
import React from 'react';
import { Box, Grid, Paper, Typography, Avatar, Button } from '@mui/material';
import { LineChart, Line, Legend, ResponsiveContainer } from 'recharts';
import HealthCards from './health-card';

type Props = {};
const VitalsData = [
  {
    id: 1,
    bmi: '25',
    bloodPressure: '120/80 mmHg',
    heartRate: '72 bpm',
    suger: '98',
    temperature: '98.6°F',
  },
];
const data = [
  {
    name: 'Page A',
    Pulse: 80,
    Temperature: 95,
    'Blood Pressure': 120,
  },
  {
    name: 'Page B',
    Pulse: 78,
    Temperature: 90,
    'Blood Pressure': 100,
  },
  {
    name: 'Page C',
    Pulse: 75,
    Temperature: 100,
    'Blood Pressure': 109,
  },
  {
    name: 'Page D',
    Pulse: 100,
    Temperature: 99,
    'Blood Pressure': 80,
  },
  {
    name: 'Page E',
    Pulse: 95,
    Temperature: 98,
    'Blood Pressure': 90,
  },
];
interface VitalsInfoProps {
  label: string;
  value: string | number;
}

const VitalsInfo: React.FC<VitalsInfoProps> = ({ label, value }) => (
  <Typography variant="h5" noWrap sx={{ display: 'flex' }}>
    {label} :{' '}
    <Typography color="text.secondary" variant="h5">
      {value}
    </Typography>
  </Typography>
);

const Predictions = (props: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <Grid item xs={12} mb={4}>
          <Typography variant="h3">AI Health Insights</Typography>
          <Typography variant="subtitle2">
            Your Personalized Health Predictions
          </Typography>
        </Grid>
        <Paper
          sx={{
            mt: 2,
            height: 300, // Set a fixed height or use a calculated value
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <Legend />
              <Line
                type="monotone"
                dataKey="Temperature"
                stroke="#6D31ED"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Pulse"
                stroke="#82ca9d"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Blood Pressure"
                stroke="#FF56A5"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
        <Grid item xs={12}>
          <Grid item xs={12} my={2}>
            <Typography variant="h3">
              Detailed Health Recommendations
            </Typography>
          </Grid>
          <HealthCards />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Grid item xs={12} mb={2}>
          <Typography variant="h3">Health Status</Typography>
          <Typography variant="subtitle2">
            Personalized recommendations based on your health history to improve
            your well-being.
          </Typography>
        </Grid>
        <Paper>
          {VitalsData.map((data) => (
            <Box
              key={data.id}
              p={2}
              bgcolor="background.default"
              borderRadius={2}
            >
              <VitalsInfo label="Current BMI" value={data.bmi} />
              <VitalsInfo label="Blood Pressure" value={data.bloodPressure} />
              <VitalsInfo label="Heart Rate" value={data.heartRate} />
              <VitalsInfo label="Sugar" value={data.suger} />
              <VitalsInfo label="Temperature" value={data.temperature} />
            </Box>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Predictions;
