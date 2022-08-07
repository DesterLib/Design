import { CssBaseline, ThemeProvider } from '@mui/material';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import lightTheme from '../src/theme/lightTheme';
import darkTheme from '../src/theme/darkTheme';
import PlayButton from '../src/components/PlayButton';

const App = () => {
  return <PlayButton>Hello</PlayButton>;
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
