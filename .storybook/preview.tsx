import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';

import { GlobalStyle } from '../src/styles/GlobalStyle';
import { darkTheme, lightTheme } from '../src/styles/theme';

const ThemeBlock = styled.div<{ fill?: boolean }>(
  ({ fill, theme: { palette } }) =>
    css`
      border-radius: 5px;
      background: ${palette.background.default};
      padding: 1rem;
      height: 100%;
      width: ${fill ? '100%' : '50%'};
      float: ${fill ? 'none' : 'left'};
    `
);

export const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === 'light' ? lightTheme : darkTheme;

  switch (theme) {
    case 'side-by-side': {
      return (
        <>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <ThemeBlock>
              <StoryFn />
            </ThemeBlock>
          </ThemeProvider>
          <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <ThemeBlock>
              <StoryFn />
            </ThemeBlock>
          </ThemeProvider>
        </>
      );
    }
    default: {
      return (
        <ThemeProvider theme={storyTheme}>
          <GlobalStyle />
          <ThemeBlock fill>
            <StoryFn />
          </ThemeBlock>
        </ThemeProvider>
      );
    }
  }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme for the components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const decorators = [withTheme];
