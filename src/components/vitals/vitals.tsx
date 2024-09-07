'use client';
import React from 'react';
import ReactMuiTable from '@/components/common/react-table';
import {
  Box,
  Chip,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  Slider,
} from '@mui/material';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type Props = {};

function getChipColor(status: string) {
  switch (status) {
    case 'BMI:93':
    case 'BMI:34':
      return '#6C42F5'; // Purple color for certain BMI values
    case 'Past':
      return '#6C42F5'; // Purple color for 'Past'
    case 'BP:40':
      return '#6C42F5'; // Similar for BP statuses
    default:
      return '#E0E0E0'; // Default color for other statuses
  }
}
const columns = [
  { heading: 'Checkup', accessor: 'checkup1', width: 160 },
  { heading: 'Checkup', accessor: 'checkup2', width: 160 },
  { heading: 'Checkup', accessor: 'checkup3', width: 160 },
  { heading: 'Checkup', accessor: 'checkup4', width: 160 },
  { heading: 'Checkup', accessor: 'checkup5', width: 160 },
  {
    heading: 'Checkup',
    accessor: 'status',
    width: 160,
    Cell: ({ row }: any) => (
      <Chip
        label={row.status}
        sx={{
          borderRadius: '20px',
          color: '#fff',
          backgroundColor: getChipColor(row.status), // Function to determine color based on status
        }}
      />
    ),
  },
];
const tableData = [
  {
    checkup1: 'Previous',
    checkup2: 'HeartRate',
    checkup3: 'BMI:75',
    checkup4: 'N/A',
    checkup5: '26',
    status: 'BMI:93', // For chip rendering
  },
  {
    checkup1: 'Previous',
    checkup2: 'Sugar: 82',
    checkup3: 'BP:85',
    checkup4: 'Prediction',
    checkup5: 'N/A',
    status: 'Past', // For chip rendering
  },
  {
    checkup1: 'Previous',
    checkup2: 'Past',
    checkup3: 'HeartRate',
    checkup4: 'BMI:60',
    checkup5: '28',
    status: 'BMI:34', // For chip rendering
  },
  {
    checkup1: 'Overall',
    checkup2: 'N/A',
    checkup3: 'Sugar: 96',
    checkup4: 'BP:72',
    checkup5: 'Prediction',
    status: 'Past', // For chip rendering
  },
  {
    checkup1: 'BMI:93',
    checkup2: 'N/A',
    checkup3: 'HeartRate',
    checkup4: 'HeartRate',
    checkup5: 'BMI:48',
    status: 'BP:40', // For chip rendering
  },
  {
    checkup1: 'Past',
    checkup2: 'N/A',
    checkup3: 'Sugar: 86',
    checkup4: 'HeartRate',
    checkup5: 'Prediction',
    status: 'Past', // For chip rendering
  },
];
const VitalsData = [
  {
    name: 'Current BMI',
    category: 'Blood Pressure',
    value: '24',
  },
  {
    name: 'Blood Sugar',
    category: 'Cholesterol Level',
    value: '120',
  },
  {
    name: 'Health',
    category: 'Risk Factors',
    value: '0%',
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

const Vitals = (props: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <Grid item xs={12} mb={2}>
          <Typography variant="h3">Checkup Information</Typography>
        </Grid>
        <Paper sx={{ mb: 2 }}>
          <ReactMuiTable columns={columns} data={tableData} />
        </Paper>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grid item xs={12} mb={2}>
              <Typography variant="h3">In Perspective</Typography>
            </Grid>
            <Paper sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={300} data={data} barSize={20}>
                  <YAxis />
                  <Legend
                    align="center"
                    verticalAlign="top"
                    wrapperStyle={{ paddingTop: '10px', paddingBottom: '10px' }}
                  />
                  <Bar
                    dataKey="Pulse"
                    fill="#6D31ED"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                  />
                  <Bar
                    dataKey="Blood Pressure"
                    fill="#15ABFF"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid item xs={12} mb={2}>
              <Typography variant="h3">Progress</Typography>
            </Grid>
            <Paper sx={{ height: 300 }}>
              <Box mb={2}>
                <Typography variant="subtitle1">Lectures:90/100</Typography>

                <Slider
                  defaultValue={90}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
                <Typography variant="body2">90% done</Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1">Lectures:90/100</Typography>

                <Slider
                  defaultValue={67}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
                <Typography variant="body2">67% done</Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1">Examine:5/7</Typography>

                <Slider
                  defaultValue={80}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
                <Typography variant="body2">80% done</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Grid item xs={12} mb={2}>
          <Typography variant="h3">Latest Vitals</Typography>
        </Grid>
        <Paper sx={{ minHeight: 410 }}>
          {VitalsData.map((data) => (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              key={data.name}
              mt={2}
              p={2}
              bgcolor="background.default"
              borderRadius={2}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar />
                <Box>
                  <Typography variant="h4">{data.name}</Typography>{' '}
                  <Typography variant="subtitle2">{data.category}</Typography>
                </Box>
              </Box>
              <Button variant="text">{data.value}</Button>
            </Box>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Vitals;
