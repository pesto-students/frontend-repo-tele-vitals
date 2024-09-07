import * as React from 'react';
import type { Metadata } from 'next';
import {
  Box,
  Grid,
  Typography,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Button,
} from '@mui/material';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';

import { config } from '@/config';
import { MuiDatePicker } from '@/components/common/MuiDateTimePicker';
import AppointmentHistoryTable from '@/components/doctor-dashboard/appointment-history-table';

export const metadata = {
  title: `Doctor Dashboard | ${config.site.name}`,
} satisfies Metadata;

type Props = {};

const appointmentData = [
  {
    heading: 'Total Patient This Month',
    value: '100',
    icon: <Diversity1Icon color="primary" />,
  },
  {
    heading: 'Total Revenue This Month',
    value: '$1,009',
    icon: <AccountBalanceOutlinedIcon color="primary" />,
  },
  {
    heading: 'Total Appointment This Month',
    value: '250',
    icon: <CalendarTodayOutlinedIcon color="primary" />,
  },
];
const RescheduleData = [
  {
    name: 'Koman Manurung',
    value: 'Teeth Cleaning',
    time: '10:00 AM',
  },
  {
    name: 'Miller Skyes',
    value: 'Dental Checkup',
    time: '11:00 AM',
  },
  {
    name: 'Enma Gobber',
    value: 'Teeth Cleaning',
    time: '2:00 PM',
  },
  {
    name: 'Enma Gobber',
    value: 'Teeth Cleaning',
    time: '2:00 PM',
  },
  {
    name: 'Enma Gobber',
    value: 'Teeth Cleaning',
    time: '2:00 PM',
  },
];
const data = [
  {
    medicationName: 'Amoxicillin',
    dosage: 'Teeth Cleaning',
    instructions: 'Take twice daily',
    dob: '2023-10-01',
    status: 'High',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Ibuprofen',
    dosage: 'Dental Checkup',
    instructions: 'Take as needed',
    dob: '2023-10-02',
    status: 'Low',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Lisinopril',
    dosage: 'Tooth Extraction',
    instructions: 'Take once daily',
    dob: '2023-10-03',
    status: 'Medium',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Metformin',
    dosage: 'Toeth Clesning',
    instructions: 'Take with meals',
    dob: '2023-10-04',
    status: 'Low',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Amlodipine',
    dosage: 'Tooth Extraction',
    instructions: 'Take once daily',
    dob: '2023-10-05',
    status: 'Low',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Simvastatin',
    dosage: 'Brace Installation',
    instructions: 'Take at night',
    dob: '2023-10-06',
    status: 'High',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Omeprazole',
    dosage: 'Brace Installation',
    instructions: 'Take before meals',
    dob: '2023-10-07',
    status: 'Medium',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Hydrochlorothiazide',
    dosage: 'Brace Installation',
    instructions: 'Take once daily',
    dob: '2023-10-08',
    status: 'Medium',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Metformin',
    dosage: 'Brace Installation',
    instructions: 'Take with meals',
    dob: '2023-10-04',
    status: 'Medium',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Amlodipine',
    dosage: 'Brace Installation',
    instructions: 'Take once daily',
    dob: '2023-10-05',
    status: 'Medium',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Simvastatin',
    dosage: 'Brace Installation',
    instructions: 'Take at night',
    dob: '2023-10-06',
    status: 'Medium',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Omeprazole',
    dosage: 'Brace Installation',
    instructions: 'Take before meals',
    dob: '2023-10-07',
    status: 'Medium',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Hydrochlorothiazide',
    dosage: 'Brace Installation',
    instructions: 'Take once daily',
    dob: '2023-10-08',
    status: 'Medium',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
];

const pageDoctorDashboard = (props: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid container item xs={12} spacing={2}>
        {appointmentData.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper>
              <Box mb={2} display="flex" alignItems="center" gap={2}>
                {data.icon}
                <Box>
                  <Typography variant="h4">{data.heading}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Total patient visited to your clinic in this month
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h2">{data.value}</Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap={1}
              >
                <Box>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <ArrowOutwardOutlinedIcon
                        fontSize="small"
                        color="primary"
                      />
                    </Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      +20%Up From Last Month
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <HelpOutlineOutlinedIcon
                    fontSize="small"
                    color="text.secondary"
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} md={8}>
        <Grid xs={12} mb={2}>
          <Typography variant="h3">Patient History</Typography>
        </Grid>
        <Paper>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box width={300} mb={2}>
                <TextField
                  id="outlined-adornment-search"
                  size="small"
                  placeholder="Search Patient Name"
                  // value={value}
                  // onChange={(e) => setValue(e.target.value)}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="search"
                          // onClick={handleSearchClick}
                          edge="start"
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box width={150}>
                <MuiDatePicker size="small" views={['month']} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <AppointmentHistoryTable data={data} />
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item xs={12} mb={2}>
          <Typography variant="h3">Reschedule Appointment</Typography>
        </Grid>
        <Paper sx={{ minHeight: 490, maxHeight: 490, overflow: 'scroll' }}>
          {RescheduleData.map((data) => (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              key={data.name}
              mt={2}
              p={1}
              bgcolor="background.default"
              borderRadius={1}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar />
                <Box>
                  <Typography variant="h4">{data.name}</Typography>{' '}
                  <Typography variant="subtitle2">
                    {data.value} {data.time}
                  </Typography>
                </Box>
              </Box>
              <Button variant="text">Reschedule</Button>
            </Box>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default pageDoctorDashboard;
