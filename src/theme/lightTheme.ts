import { createTheme } from "@mui/material";
import baseTheme from "./baseTheme";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
      main: '#2A3235',
      light: '#708185',
      dark: '#1E282D',
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
      paper: '#e9e9e9',
      default: '#ffffff',
    },
  },
  ...baseTheme
});

export default lightTheme;
