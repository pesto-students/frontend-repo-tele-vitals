'use client';
import * as React from 'react';
import { useFormik } from 'formik';
import { object, string, date } from 'yup';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MuiDateTimePicker } from '@/components/common/MuiDateTimePicker';
import dayjs from 'dayjs';
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  Autocomplete,
} from '@mui/material';

interface VitalsModalProps {
  open: boolean;
  handleClose?: (
    event?: React.SyntheticEvent<any>,
    reason?: 'backdropClick' | 'escapeKeyDown'
  ) => void;
  handleSubmit?: () => void;
}
const formValidationSchema = object({
  doctor: object().shape({
    label: string().required('Required'),
  }),
  issue: string().required('Required'),
  comment: string().required('Required'),
  dateTime: date()
    .nullable()
    .required('Date and time are required')
    .test('is-future', 'Please select a future date and time', (value) => {
      return dayjs(value).isAfter(dayjs());
    }),
});

interface AppointmentModalProps {
  open: boolean;
  handleClose?: (
    event?: React.SyntheticEvent<any>,
    reason?: 'backdropClick' | 'escapeKeyDown'
  ) => void;
  handleSubmit?: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  open,
  handleClose = () => {},
  handleSubmit = () => {},
}) => {
  const formikForm = useFormik({
    initialValues: {
      doctor: { label: '' },
      issue: '',
      comment: '',
      dateTime: null,
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleSubmit();
    },
  });
  const options = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
  ];
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h3" component="span">
            Book an Appointment
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container gap={4} mt={4}>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                options={options}
                popupIcon={<KeyboardArrowDownIcon />}
                value={formikForm.values.doctor}
                onChange={(_e, newValue) => {
                  formikForm.setFieldValue('doctor', newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    name="doctor"
                    label="Select Doctor"
                    InputLabelProps={{ shrink: true }}
                    placeholder="Select Doctor"
                    // {...formikForm.getFieldProps('doctor')}
                    onBlur={formikForm.handleBlur}
                    error={
                      formikForm.touched.doctor?.label &&
                      Boolean(formikForm.errors.doctor?.label)
                    }
                    helperText={
                      formikForm.touched.doctor?.label &&
                      formikForm.errors.doctor?.label
                    }
                  />
                )}
              />
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-hr"
                  label="Reason for appointment"
                  placeholder="Enter issue"
                  multiline
                  {...formikForm.getFieldProps('issue')}
                  error={
                    formikForm.touched.issue && Boolean(formikForm.errors.issue)
                  }
                  helperText={
                    formikForm.touched.issue && formikForm.errors.issue
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-comment"
                  label="Additional comments/notes"
                  placeholder="Enter comment"
                  multiline
                  {...formikForm.getFieldProps('comment')}
                  error={
                    formikForm.touched.comment &&
                    Boolean(formikForm.errors.comment)
                  }
                  helperText={
                    formikForm.touched.comment && formikForm.errors.comment
                  }
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <MuiDateTimePicker
                label="Select Appointment Date"
                disablePast
                value={formikForm.values.dateTime}
                onChange={(newValue: any) => {
                  formikForm.setFieldValue('dateTime', newValue);
                }}
                slots={{
                  textField: (params: any) => (
                    <TextField
                      {...params}
                      error={
                        formikForm.touched.dateTime &&
                        Boolean(formikForm.errors.dateTime)
                      }
                      helperText={
                        formikForm.touched.dateTime &&
                        formikForm.errors.dateTime
                      }
                    />
                  ),
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={() => formikForm.handleSubmit()}
            fullWidth
            variant="contained"
            autoFocus
            type="submit"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AppointmentModal;
