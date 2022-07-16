import styled, { css, ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import { GlobalStyles } from '../src/theme/GlobalStyles';
import React from 'react';
// import { withThemesProvider } from 'themeprovider-storybook';

export const parameters = {
  // backgrounds: {
  //   default: 'dark',
  //   values: [
  //     {
  //       name: 'dark',
  //       value: '#00151C',
  //     },
  //     {
  //       name: 'light',
  //       value: '#ffffff',
  //     },
  //   ],
  // },
  actions: { argTypesRegex: '^on.*' },
  viewMode: 'docs',
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

const ThemeBlock = styled.div<{ fill: boolean }>(
  ({ theme }) =>
    css`
      position: absolute;
      top: 0;
      width: 100vw;
      height: 100vh;
      bottom: 0;
      overflow: auto;
      padding: 1rem;
      background: ${theme.backgroundColor};
    `
);
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
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgba(0, 0, 0, 0.38)',
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
    backgroundColor: '#00151C',
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
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
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

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export const withTheme: DecoratorFn = (StoryFn, context) => {
  // Get values from story parameter first, else fallback to globals
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === 'dark' ? themes[1] : themes[0];
  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyles />
      <ThemeBlock fill>
        <StoryFn />
      </ThemeBlock>
    </ThemeProvider>
  );
};

// export const decorators = [withThemesProvider(themes)];

export const decorators = [withTheme];
