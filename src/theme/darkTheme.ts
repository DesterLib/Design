import { createTheme } from '@mui/material';
import baseTheme from './baseTheme';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#1D1D1D',
      white: '#fff',
    },
    primary: {
      main: '#00FFB3',
      light: '#3FFFB3',
      dark: '#00DBAF',
      contrastText: '#000000',
    },
    secondary: {
      main: '#166B70',
      light: '#43A9A6',
      dark: '#105560',
      contrastText: '#ffffff',
    },
    error: {
      main: '#FF3564',
      light: '#FF677C',
      dark: '#DB2662',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FF9E16',
      light: '#FFBD50',
      dark: '#DB7E10',
      contrastText: '#ffffff',
    },
    info: {
      main: '#286CFF',
      light: '#5D95FF',
      dark: '#1D53DB',
      contrastText: '#ffffff',
    },
    success: {
      main: '#84EF6A',
      light: '#4FE53B',
      dark: '#30C42B',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#07272b',
      default: '#00151C',
    },
  },
  ...baseTheme
});

export default darkTheme;
