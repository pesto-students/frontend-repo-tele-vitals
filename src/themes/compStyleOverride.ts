import { Height, Padding } from '@mui/icons-material';

export default function componentStyleOverrides(theme: {
  colors: any;
  heading?: string;
  paper?: string;
  backgroundDefault?: string;
  background?: string;
  darkTextPrimary?: string;
  darkTextSecondary: any;
  textDark: any;
  menuSelected?: string;
  menuSelectedBack?: string;
  divider: any;
  customization: any;
}) {
  const bgColor = theme.colors?.paper;
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '8px',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        rounded: {
          borderRadius: '8px',
        },
        root: {
          padding: '16px', // This adds padding of 2 (equivalent to theme.spacing(2))
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          '&::placeholder': {
            color: theme.darkTextSecondary,
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        autoComplete: 'off',
        InputLabelProps: {
          shrink: true,
        },
      },
      styleOverrides: {
        root: {
          width: '100%',
          borderRadius: '6px',
          '& input.MuiInputBase-input': {
            paddingTop: '12px',
            paddingBottom: '12px',
          },
          '& .MuiInputLabel-root': {
            transform: 'none',
            top: '-24px',
          },
          '& .MuiInputLabel-shrink': {
            lineHeight: '15px',
            color: theme.textDark,
          },
          '& .MuiFilledInput-root': {
            borderRadius: '4px',
          },
          '& .MuiFilledInput-underline': {
            '& :before': {
              borderBottom: 'none !important',
            },
            '& :after': {
              borderBottom: 'none !important',
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            top: '-1px',
            legend: {
              display: 'none',
            },
          },
          '& .MuiFilledInput-input': {
            lineHeight: '19.07px',
            fontWeight: '500',
            fontStyle: 'normal',
          },
          /* The below code hides the reveal button that appears when a user types a password in a password input field. (Only for Edge browser) */
          'input::-ms-reveal': {
            display: 'none',
          },

          '& input[type="number"]': {
            /* Remove up and down arrows for number field */
            appearance: 'none',
            MozAppearance: 'textfield' /* Firefox */,
            '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
              display: 'none',
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: '8px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.colors?.grey400,
          },
          '&:hover $notchedOutline': {
            borderColor: theme.colors?.primaryLight,
          },
          '&.MuiInputBase-multiline': {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: bgColor,
          padding: '15.5px 14px',
          borderRadius: '8px',
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
          fontWeight: '400',
          lineHeight: '19.07px',
          marginLeft: '10px',
          marginTop: '2px',
        },
        contained: {
          marginLeft: 2,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1,
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        maxWidth: 'sm',
        fullWidth: true,
      },
      styleOverrides: {
        paper: {
          borderRadius: '8px',
          '& .mui-dialog-close-icon-btn': {},
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 400,
          fontStyle: 'normal',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          justifyContent: 'flex-start',
          borderBottom: 0,
          fontWeight: 700,
          fontSize: '12px !important',
          padding: '6px 4px !important',
          userSelect: 'none',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textTransform: 'uppercase !important',
          whiteSpace: 'nowrap',
          '&:last-child': {
            borderRadius: '0 4px 0 0',
          },
          '&:first-of-type': {
            borderRadius: '4px 0 0 0',
          },
          backgroundColor: `${theme.backgroundDefault}!important`,
          color: '#000 !important',
        },
        root: {
          fontWeight: 400,
          borderBottom: '1px solid',
          fontSize: '14px !important',
          lineHeight: '16.94px',
          borderColor: theme.colors?.border,
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
        sizeSmall: {
          minHeight: '45px !important',
          padding: '14px 14px 10px 14px !important',
          wordBreak: 'break-all',
          '&:last-child': {
            paddingRight: 4,
            borderRight: 'none',
          },
          input: {
            fontFamily: 'inter, sans-serif',
          },
        },
        sizeMedium: {
          minHeight: '45px !important',
          padding: '14px 14px 10px 14px !important',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: 0,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '& .MuiTableBody-root *:hover::-webkit-scrollbar': {
            width: '10px !important',
          },
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        icon: { color: '#53B4A7 !important' },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          width: '100%',
          display: 'block',
          borderBottom: 0,
          '& p': {
            margin: 0,
          },
          padding: '3px',
        },
        caption: {
          userSelect: 'none',
        },
        select: {
          borderRadius: 2,
          paddingX: 0,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            // backgroundColor: theme.colors?.secondary200,
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        barColorPrimary: {
          backgroundColor: '#84AFEF',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          marginTop: '5px',
        },
        option: {
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '16.94px',
          minHeight: '40px !important',
        },
        inputRoot: {
          paddingTop: '4px !important',
          paddingBottom: '4px !important',
          minHeight: '46px !important',
        },
      },
    },
  };
}
