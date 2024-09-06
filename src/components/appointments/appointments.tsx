'use client';
import AppointmentTable from '@/components/appointments/appointment-table';
import { Grid, Typography, Button, Paper } from '@mui/material';
import React, { useState } from 'react';
import AppointmentModal from './appointment-modal';

type Props = {};

const data = [
  {
    medicationName: 'Amoxicillin',
    dosage: 'Teeth Cleaning',
    instructions: 'Take twice daily',
    dob: '2023-10-01',
    status: 'Pending',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Ibuprofen',
    dosage: 'Dental Checkup',
    instructions: 'Take as needed',
    dob: '2023-10-02',
    status: 'approved',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Lisinopril',
    dosage: 'Tooth Extraction',
    instructions: 'Take once daily',
    dob: '2023-10-03',
    status: 'Completed',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Metformin',
    dosage: 'Toeth Clesning',
    instructions: 'Take with meals',
    dob: '2023-10-04',
    status: 'Completed',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Amlodipine',
    dosage: 'Tooth Extraction',
    instructions: 'Take once daily',
    dob: '2023-10-05',
    status: 'Completed',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Simvastatin',
    dosage: 'Brace Installation',
    instructions: 'Take at night',
    dob: '2023-10-06',
    status: 'Completed',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Omeprazole',
    dosage: 'Brace Installation',
    instructions: 'Take before meals',
    dob: '2023-10-07',
    status: 'Completed',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Hydrochlorothiazide',
    dosage: 'Brace Installation',
    instructions: 'Take once daily',
    dob: '2023-10-08',
    status: 'Completed',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Metformin',
    dosage: 'Brace Installation',
    instructions: 'Take with meals',
    dob: '2023-10-04',
    status: 'Completed',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Amlodipine',
    dosage: 'Brace Installation',
    instructions: 'Take once daily',
    dob: '2023-10-05',
    status: 'Completed',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Simvastatin',
    dosage: 'Brace Installation',
    instructions: 'Take at night',
    dob: '2023-10-06',
    status: 'Completed',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Omeprazole',
    dosage: 'Brace Installation',
    instructions: 'Take before meals',
    dob: '2023-10-07',
    status: 'Completed',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
  {
    medicationName: 'Hydrochlorothiazide',
    dosage: 'Brace Installation',
    instructions: 'Take once daily',
    dob: '2023-10-08',
    status: 'Completed',
    contact: '+919890098900',
    appointmentDate: '2023-10-01',
  },
];

const Appointments = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    setOpen(false);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleOpen}>
          Book New Appointment
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <AppointmentTable data={data} />
        </Paper>
      </Grid>
      <AppointmentModal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </Grid>
  );
};

export default Appointments;
