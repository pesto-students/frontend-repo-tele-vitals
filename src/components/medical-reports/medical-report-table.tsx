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
  { heading: 'Medication Name', accessor: 'medicationName', width: 240 },
  { heading: 'Dosage', accessor: 'dosage', width: 220 },
  { heading: 'Instructions', accessor: 'instructions', width: 220 },
  { heading: 'Prescribed Date', accessor: 'prescribedDate', width: 240 },
  { heading: 'Status', accessor: 'status', width: 240 },
  {
    heading: 'Actions',
    accessor: 'action',
    width: 100,
    Cell: () => (
      <Box display="flex" gap={2}>
        <IconButton
          aria-label="close"
          //   onClick={handleCloseModal}
        >
          <VisibilityIcon color="primary" />
        </IconButton>
        <IconButton
          aria-label="close"
          //   onClick={handleCloseModal}
        >
          <EditIcon color="primary" />
        </IconButton>
      </Box>
    ),
  },
];

const MedicalReportTable: React.FC<Props> = ({ data }) => {
  return <ReactMuiTable columns={columns} data={data} enablePagination />;
};

export default MedicalReportTable;
