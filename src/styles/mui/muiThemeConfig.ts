import { createTheme } from '@mui/material/styles';

/** Add all custom theme config here. (This is merged with MUI default theme.) */
const customThemeConfig = {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // label style for standard input
          '& .MuiFormLabel-root': {
            color: '#303030',
          },
          // text style for standard input
          '& .MuiInputBase-input': {
            color: '#303030',
          },
          // underline style for standard input
          '& .MuiInput-underline:before': {
            borderBottomColor: '#303030',
          },
          // focused label style for standard input
          '& .MuiFormLabel-root.Mui-focused': {
            color: '#303030',
          },
          // focused text style for standard input
          '& .MuiInput-underline.Mui-focused .MuiInputBase-input': {
            color: '#303030',
          },
          // focused undeline style for standard input
          '& .MuiInput-underline:after': {
            borderBottomColor: '#303030',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          // style for outlined button
          '&.MuiButton-outlined': {
            color: '#303030',
            borderColor: '#303030',
          },
          // style for hovered outlined button
          '&.MuiButton-outlined:hover': {
            color: '#303030',
            borderColor: '#303030',
            backgroundColor: '#fafafa',
          },
        },
      },
    },
  },
};

// @ts-ignore
export const muiThemeConfig = createTheme(customThemeConfig);
