'use client';
import React from 'react';
import ReactMuiTable from '@/components/common/react-table';
import { IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface DataRow {
  [key: string]: string | number;
}

interface Props {
  data: DataRow[];
}
const columns = [
  { heading: 'Patient Name', accessor: 'medicationName', width: 240 },
  { heading: 'Latest Visit Issue', accessor: 'dosage', width: 220 },
  { heading: 'Date Of Birth', accessor: 'dob', width: 220 },
  { heading: 'Contact', accessor: 'contact', width: 240 },
  { heading: 'Appoinment Date', accessor: 'appointmentDate', width: 240 },
  { heading: 'Status', accessor: 'status', width: 240 },
  {
    heading: 'Actions',
    accessor: 'action',
    width: 100,
    Cell: ({ row }: any) => (
      <Box display="flex" gap={2}>
        {row.status === 'Completed' ? (
          <IconButton
            aria-label="close"
            //   onClick={handleCloseModal}
          >
            <VisibilityIcon color="primary" />
          </IconButton>
        ) : (
          <IconButton
            aria-label="close"
            //   onClick={handleCloseModal}
          >
            <EditIcon color="primary" />
          </IconButton>
        )}
      </Box>
    ),
  },
];

const AppointmentTable: React.FC<Props> = ({ data }) => {
  return <ReactMuiTable columns={columns} data={data} enablePagination />;
};

export default AppointmentTable;
