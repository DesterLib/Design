import React from "react";
import { styled, ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import lightTheme from "../src/theme/lightTheme";
import darkTheme from "../src/theme/darkTheme";
import { MemoryRouter } from "react-router-dom";

const ThemeBlock = styled("div")(({ theme: { palette } }) => ({
  color: "darkslategray",
  background: palette.background.default,
  padding: "1rem",
  height: "100%",
  width: "100%",
  borderRadius: "5px",
}));

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Theme for the components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
        { value: "side-by-side", icon: "sidebar", title: "side by side" },
      ],
      showName: true,
    },
  },
};

export const decorators = [
  (StoryFn: any, context: any) => {
    const theme = context.parameters.theme || context.globals.theme;
    const storyTheme = theme === "light" ? lightTheme : darkTheme;

    switch (theme) {
      case "side-by-side": {
        return (
          <>
            <MemoryRouter initialEntries={["/"]}>
              <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <ThemeBlock>
                  <StoryFn />
                </ThemeBlock>
              </ThemeProvider>
              <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <ThemeBlock>
                  <StoryFn />
                </ThemeBlock>
              </ThemeProvider>
            </MemoryRouter>
          </>
        );
      }
      default: {
        return (
          <MemoryRouter initialEntries={["/"]}>
            <ThemeProvider theme={storyTheme}>
              <CssBaseline />
              <ThemeBlock>
                <StoryFn />
              </ThemeBlock>
            </ThemeProvider>
          </MemoryRouter>
        );
      }
    }
  },
];
