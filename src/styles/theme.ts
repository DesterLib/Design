import { DefaultTheme } from 'styled-components';
import lightThemeDefaults from './themeDefaults/lightTheme';
import darkThemeDefaults from './themeDefaults/darkTheme';

declare module 'styled-components' {
    export interface DefaultTheme {
        mode: 'light' | 'dark';
        palette: typeof lightThemeDefaults.palette;
        shape: {
            borderRadius: typeof lightThemeDefaults.shape.borderRadius;
        };
        spacing: typeof lightThemeDefaults.spacing;
        shadows: typeof lightThemeDefaults.shadows;
        typography: typeof lightThemeDefaults.typography;
        sizing: {
          padding: typeof lightThemeDefaults.sizing.padding,
          margin: typeof lightThemeDefaults.sizing.margin,
          fontSize: typeof lightThemeDefaults.sizing.fontSize,
      },
    }
}

export const lightTheme: DefaultTheme = {
    mode: 'light',
    palette: lightThemeDefaults.palette,
    spacing: lightThemeDefaults.spacing,
    shadows: lightThemeDefaults.shadows,
    shape: {
        borderRadius: lightThemeDefaults.shape.borderRadius,
    },
    typography: lightThemeDefaults.typography,
    sizing: {
      padding: lightThemeDefaults.sizing.padding,
      margin: lightThemeDefaults.sizing.margin,
      fontSize: lightThemeDefaults.sizing.fontSize,
  },
};

export const darkTheme: DefaultTheme = {
    mode: 'dark',
    palette: darkThemeDefaults.palette,
    spacing: darkThemeDefaults.spacing,
    shadows: darkThemeDefaults.shadows,
    shape: {
        borderRadius: darkThemeDefaults.shape.borderRadius,
    },
    typography: darkThemeDefaults.typography,
    sizing: {
        padding: darkThemeDefaults.sizing.padding,
        margin: darkThemeDefaults.sizing.margin,
        fontSize: darkThemeDefaults.sizing.fontSize,
    },
};
