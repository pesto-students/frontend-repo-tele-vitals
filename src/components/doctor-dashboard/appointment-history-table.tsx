'use client';
import React from 'react';
import ReactMuiTable from '@/components/common/react-table';
import { Chip } from '@mui/material';

interface DataRow {
  [key: string]: string | number;
}

interface Props {
  data: DataRow[];
}
const getChipColor = (value: any) => {
  switch (value) {
    case 'High':
      return '#FFCDCD'; // High color
    case 'Medium':
      return '#CEDBFE'; // Medium color
    case 'Low':
      return '#C0EAC6'; // Low color
    default:
      return '#E0E0E0'; // Default color if none of the options match
  }
};
const columns = [
  { heading: 'Patient Name', accessor: 'medicationName', width: 240 },
  { heading: 'Latest Visit Issue', accessor: 'dosage', width: 220 },
  { heading: 'Date Of Birth', accessor: 'dob', width: 220 },
  { heading: 'Contact', accessor: 'contact', width: 240 },
  { heading: 'Appoinment Date', accessor: 'appointmentDate', width: 240 },
  {
    heading: 'Priority',
    accessor: 'status',
    width: 240,
    Cell: ({ row }) => (
      <Chip
        label={row.status}
        sx={{
          backgroundColor: getChipColor(row.status),
        }}
      />
    ),
  },
];

const AppointmentHistoryTable: React.FC<Props> = ({ data }) => {
  return <ReactMuiTable columns={columns} data={data} enablePagination />;
};

export default AppointmentHistoryTable;
