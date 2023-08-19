import { createTheme } from '@mui/material/styles';

/** Add all custom theme config here. (This is merged with MUI default theme.) */
const customThemeConfig = {
  palette: {
    primary: {
      main: '#303030',
    },
  },
  typography: {
    allVariants: {
      color: '#303030',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          borderColor: '#303030',
          color: '#303030',
          '&:hover': {
            backgroundColor: '#f7f7f7',
            borderColor: '#303030',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          // style for select icon
          '& .MuiSelect-icon': {
            color: '#303030',
          },
          // style for outline of select
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#303030',
          },
        },
      },
    },
  },
};

// @ts-ignore
export const muiThemeConfig = createTheme(customThemeConfig);
