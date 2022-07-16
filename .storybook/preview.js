export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Getting Started',
        ['Overview', 'Installation'],
        'Components',
        'Dev',
      ],
      locales: 'en-US',
    },
  },
};

import { withThemesProvider } from 'themeprovider-storybook';

// Options:
const themes = [
  {
    name: 'light',
    backgroundColor: '#fff',
    palette: {
      primary: {
        main: '#00FFB3',
        light: '#3FFFB3',
        dark: '#00DBAF',
        contrastText: '#ffffff',
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
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: '"Rubik", sans-serif',
    },
  },
  {
    name: 'dark',
    backgroundColor: '#000',
    palette: {
      primary: {
        main: '#00FFB3',
        light: '#3FFFB3',
        dark: '#00DBAF',
        contrastText: '#000000',
      },
      secondary: {
        main: '#0E4D51',
        light: '#399694',
        dark: '#0A3D45',
        contrastText: '#ffffff',
      },
      error: {
        main: '#FF3564',
        light: '#FF677C',
        dark: '#DB2662',
        contrastText: '#000000',
      },
      warning: {
        main: '#FF9E16',
        light: '#FFBD50',
        dark: '#DB7E10',
        contrastText: '#000000',
      },
      info: {
        main: '#286CFF',
        light: '#5D95FF',
        dark: '#1D53DB',
        contrastText: '#000000',
      },
      success: {
        main: '#84EF6A',
        light: '#4FE53B',
        dark: '#30C42B',
        contrastText: '#000000',
      },
      background: {
        paper: '#07272b',
        default: '#00151C',
      },
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: '"Rubik", sans-serif',
    },
  },
];

export const decorators = [withThemesProvider(themes)];
