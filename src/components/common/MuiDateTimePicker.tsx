'use client';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export function MuiDatePicker({ ...props }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...props}
        slotProps={{ textField: { size: 'small' } }} // Sets the size to small
      />
    </LocalizationProvider>
  );
}

export function MuiDateTimePicker({ ...props }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        {...props}
        slotProps={{ textField: { size: 'small' } }} // Sets the size to small
      />
    </LocalizationProvider>
  );
}
