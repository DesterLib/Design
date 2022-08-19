import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  prefix: "dester",
  theme: {
    colors: {
      primary400: "#4aeaaa",
      primary500: "#14dca0",
      primary600: "#0ebd99",
      textPrimary: "#000000",
      textSecondary: "#151515",
      backgroundPaper: "#ffffff",
      backgroundDefault: "#f6f6f6",
    },
    fonts: {
      sans: "'Rubik', sans-serif",
    },
    radii: {
      md: "10px",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    primary400: "#4aeaaa",
    primary500: "#14dca0",
    primary600: "#0ebd99",
    textPrimary: "#ffffff",
    textSecondary: "#e3e3e3",
    backgroundPaper: "#184452",
    backgroundDefault: "#103039",
  },
});
