import * as React from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, TextField, IconButton } from '@mui/material';

interface VitalsModalProps {
  open: boolean;
  handleClose?: (
    event?: React.SyntheticEvent<any>,
    reason?: 'backdropClick' | 'escapeKeyDown'
  ) => void;
  handleSubmit?: () => void;
}
const formValidationSchema = object({
  bloodPressure: string().required('Required'),
  heartRate: string().required('Required'),
  sugar: string().required('Required'),
});

const VitalsModal: React.FC<VitalsModalProps> = ({
  open,
  handleClose = () => {},
  handleSubmit = () => {},
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const formikForm = useFormik({
    initialValues: {
      bloodPressure: '',
      heartRate: '',
      sugar: '',
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleSubmit();
    },
  });

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
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
            {' '}
            New Vitals Input
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={4} mt={4}>
            <TextField
              id="outlined-bp"
              label="Blood Pressure"
              placeholder="Enter value"
              {...formikForm.getFieldProps('bloodPressure')}
              error={
                formikForm.touched.bloodPressure &&
                Boolean(formikForm.errors.bloodPressure)
              }
              helperText={
                formikForm.touched.bloodPressure &&
                formikForm.errors.bloodPressure
              }
            />
            <TextField
              id="outlined-hr"
              label="Heart Rate"
              placeholder="Enter value"
              {...formikForm.getFieldProps('heartRate')}
              error={
                formikForm.touched.heartRate &&
                Boolean(formikForm.errors.heartRate)
              }
              helperText={
                formikForm.touched.heartRate && formikForm.errors.heartRate
              }
            />
            <TextField
              id="outlined-sugar"
              label="Suger"
              placeholder="Enter value"
              {...formikForm.getFieldProps('sugar')}
              error={
                formikForm.touched.sugar && Boolean(formikForm.errors.sugar)
              }
              helperText={formikForm.touched.sugar && formikForm.errors.sugar}
            />
          </Box>
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
export default VitalsModal;
