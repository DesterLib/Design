const baseTheme = {
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: '"Rubik", sans-serif',
  },
  // shadows: Array(25).fill("none") as any,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};

export default baseTheme;
