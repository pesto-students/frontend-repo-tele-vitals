/* eslint-disable */
// @ts-nocheck
import { enqueueSnackbar } from 'notistack'; // Import enqueueSnackbar from notistack if it's from this library
import { FC } from 'react';

interface SwalToastProps {
  icon?: 'success' | 'error' | 'info' | 'warning'; // Defining the allowed icon types
  title: string; // Title is a required string
}

/**
 * @function SwalToast - Custom Toast for popup alert
 * @param {string} icon - The icon of the toast.
 * @param {string} title - The title of the toast.
 * @returns {JSX} SwalToast Component.
 */
const ToastMessage: FC<SwalToastProps> = ({
  icon: type = 'success',
  title,
}) => {
  enqueueSnackbar(title, { variant: type, preventDuplicate: true });
};

export default ToastMessage;
