import { Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import { config } from '@/config';
import type { Metadata } from 'next';
import MedicalReportTable from '@/components/medical-reports/medical-report-table';

export const metadata = {
  title: `Patient Information | ${config.site.name}`,
} satisfies Metadata;

interface InfoCardProps {
  title: string;
  data: Array<{ label: string; value: string }>;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, data }) => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {data.map((item, index) => (
        <Typography
          key={index}
          variant="body2"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          {item.label}:
          <Typography noWrap component="span" color="text.secondary">
            {item.value}
          </Typography>
        </Typography>
      ))}
    </Paper>
  );
};
const personalInfo = [
  { label: 'Name', value: 'John Doe' },
  { label: 'DOB', value: '1980/01/01' },
];

const emergencyContact = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Phone', value: '+1-555-555-5556' },
];

const healthDetails = [
  { label: 'Blood Type', value: 'O+' },
  { label: 'Allergies', value: 'None' },
];

const data = [
  {
    medicationName: 'Amoxicillin',
    dosage: '500mg',
    instructions: 'Take twice daily',
    prescribedDate: '2023-10-01',
    status: 'Active',
  },
  {
    medicationName: 'Ibuprofen',
    dosage: '200mg',
    instructions: 'Take as needed',
    prescribedDate: '2023-10-02',
    status: 'Active',
  },
  {
    medicationName: 'Lisinopril',
    dosage: '10mg',
    instructions: 'Take once daily',
    prescribedDate: '2023-10-03',
    status: 'Active',
  },
  {
    medicationName: 'Metformin',
    dosage: '500mg',
    instructions: 'Take with meals',
    prescribedDate: '2023-10-04',
    status: 'Completed',
  },
  {
    medicationName: 'Amlodipine',
    dosage: '5mg',
    instructions: 'Take once daily',
    prescribedDate: '2023-10-05',
    status: 'Active',
  },
  {
    medicationName: 'Simvastatin',
    dosage: '20mg',
    instructions: 'Take at night',
    prescribedDate: '2023-10-06',
    status: 'Completed',
  },
  {
    medicationName: 'Omeprazole',
    dosage: '20mg',
    instructions: 'Take before meals',
    prescribedDate: '2023-10-07',
    status: 'Active',
  },
  {
    medicationName: 'Hydrochlorothiazide',
    dosage: '12.5mg',
    instructions: 'Take once daily',
    prescribedDate: '2023-10-08',
    status: 'Active',
  },
  {
    medicationName: 'Metformin',
    dosage: '500mg',
    instructions: 'Take with meals',
    prescribedDate: '2023-10-04',
    status: 'Completed',
  },
  {
    medicationName: 'Amlodipine',
    dosage: '5mg',
    instructions: 'Take once daily',
    prescribedDate: '2023-10-05',
    status: 'Active',
  },
  {
    medicationName: 'Simvastatin',
    dosage: '20mg',
    instructions: 'Take at night',
    prescribedDate: '2023-10-06',
    status: 'Completed',
  },
  {
    medicationName: 'Omeprazole',
    dosage: '20mg',
    instructions: 'Take before meals',
    prescribedDate: '2023-10-07',
    status: 'Active',
  },
  {
    medicationName: 'Hydrochlorothiazide',
    dosage: '12.5mg',
    instructions: 'Take once daily',
    prescribedDate: '2023-10-08',
    status: 'Active',
  },
];

const pageMedicalReports: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <InfoCard title="Personal Info" data={personalInfo} />
      </Grid>

      <Grid item xs={12} md={4}>
        <InfoCard title="Emergency Contact" data={emergencyContact} />
      </Grid>

      <Grid item xs={12} md={4}>
        <InfoCard title="Health Details" data={healthDetails} />
      </Grid>
      <Grid item xs={12} mt={4}>
        <Typography variant="h3">Prescription Details</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          {' '}
          <MedicalReportTable data={data} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default pageMedicalReports;
