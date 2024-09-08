'use client';
import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  ButtonGroup,
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { styled } from '@mui/material/styles';
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
} from 'recharts';

const CustomButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active', // Prevent "active" from being passed to the DOM
})<{ active: boolean }>(({ active, theme }) => ({
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 500,
  padding: '5px 10px',
  color: active ? theme.palette.common.white : theme.palette.text.primary,
  backgroundColor: active
    ? theme.palette.primary.main
    : theme.palette.background.default,
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: active
      ? theme.palette.primary.dark
      : theme.palette.action.hover,
  },
}));
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
  {
    name: 'Page F',
    Pulse: 90,
    Temperature: 96,
    'Blood Pressure': 96,
  },
  {
    name: 'Page G',
    Pulse: 80,
    Temperature: 97,
    'Blood Pressure': 80,
  },
];

type Props = {};
type ToggleValue = '12 month' | '30 days';

const vitalsData = [
  { heading: 'Heart Rate', value: '72 bpm', color: '#8E61F1' },
  { heading: 'Blood Pressure', value: '120/80 mmHg', color: '#FA876B' },
  { heading: 'Temperature', value: '98.6°F', color: '#125D95' },
  { heading: 'Suger', value: '98', color: '#DAB200' },
];
const AppointmentData = [
  {
    name: 'Dr. Smith',
    date: ' 2023-10-05',
    time: ' 10:00 AM',
    status: 'Scheduled',
  },
  {
    name: 'Dr. Johnson',
    date: '2023-10-10',
    time: ' 2:00 PM',
    status: 'Confirmed',
  },
  { name: 'Dr. Lee', date: '2023-10-15', time: ' 11:00 AM', status: 'Pending' },
];
const PatientDashboard = (props: Props) => {
  const [activeValue, setActiveValue] = useState<ToggleValue>('12 month');

  // Function to handle button clicks and update active status
  const handleButtonClick = (value: ToggleValue) => {
    setActiveValue(value);
  };
  return (
    <Grid container spacing={2} alignItems="start">
      <Grid item xs={12} md={6}>
        <Grid item xs={12}>
          <Typography variant="h3">Prediction Distribution</Typography>
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
      </Grid>

      <Grid container item xs={12} md={6} columnSpacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">Vitals Summary</Typography>
        </Grid>
        {vitalsData.map((data, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              sx={{
                display: 'flex',
                mt: 2,
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1,
                px: 2,
                backgroundColor: `rgba(${parseInt(data.color.slice(1, 3), 16)}, ${parseInt(data.color.slice(3, 5), 16)}, ${parseInt(data.color.slice(5, 7), 16)}, 0.7)`, // 0.5 for 50% opacity
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1" color="white">
                  {data.heading}
                </Typography>
                <Typography component="div" variant="h1" color="white">
                  {data.value}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <ArrowDropUpIcon />
                  <Typography color="white" component="div" variant="h5">
                    Stable
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3"> Doctor Appointment Summary</Typography>
      </Grid>
      {AppointmentData.map((data, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper sx={{ p: 2 }}>
            <Typography component="div" variant="h4" noWrap>
              {data.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" noWrap>
              Date: {data.date}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" noWrap>
              Time: {data.time}
            </Typography>
            <Box display="flex" justifyContent="center">
              <Typography variant="subtitle1" color="primary" noWrap>
                {data.status}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Typography variant="h3">Vital Signs Over Time</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ height: 400 }}>
          <Box mb={2}>
            <ButtonGroup>
              <CustomButton
                onClick={() => handleButtonClick('12 month')}
                active={activeValue === '12 month'}
              >
                12 month
              </CustomButton>
              <CustomButton
                onClick={() => handleButtonClick('30 days')}
                active={activeValue === '30 days'}
              >
                30 days
              </CustomButton>
            </ButtonGroup>
          </Box>{' '}
          <ResponsiveContainer width="100%" height="90%">
            <BarChart width={500} height={300} data={data} barSize={40}>
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis dataKey="Blood Pressure" />
              <Legend wrapperStyle={{ paddingTop: 5 }} />
              <Bar
                dataKey="Temperature"
                fill="#6D31ED"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="Pulse"
                fill="#15ABFF"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
              <Bar
                dataKey="Blood Pressure"
                fill="#FF56A5"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PatientDashboard;
