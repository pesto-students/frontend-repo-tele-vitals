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
          borderRadius: "8px",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        rounded: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          "&::placeholder": {
            color: theme.darkTextSecondary,
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        autoComplete: "off",
      },
      styleOverrides: {
        root: {
          width: "100%",
          borderRadius: "8px",
          "& .MuiInputLabel-root": {
            lineHeight: "19.07px",
          },
          "& .MuiInputLabel-shrink": {
            lineHeight: "15px",
          },
          "& .MuiFilledInput-root": {
            borderRadius: "4px",
          },
          "& .MuiFilledInput-underline": {
            "& :before": {
              borderBottom: "none !important",
            },
            "& :after": {
              borderBottom: "none !important",
            },
          },
          "& .MuiFilledInput-input": {
            lineHeight: "19.07px",
            fontWeight: "500",
            fontStyle: "normal",
          },
          /* The below code hides the reveal button that appears when a user types a password in a password input field. (Only for Edge browser) */
          "input::-ms-reveal": {
            display: "none",
          },

          '& input[type="number"]': {
            /* Remove up and down arrows for number field */
            appearance: "none",
            MozAppearance: "textfield" /* Firefox */,
            "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
              display: "none",
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: "8px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.colors?.grey400,
          },
          "&:hover $notchedOutline": {
            borderColor: theme.colors?.primaryLight,
          },
          "&.MuiInputBase-multiline": {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: bgColor,
          padding: "15.5px 14px",
          borderRadius: "8px",
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
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
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1,
        },
      },
    },
  };
}
