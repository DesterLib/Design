import { createSlice } from "@reduxjs/toolkit";

const themeToggleSlice: any = createSlice({
  name: "theme",
  initialState: {
    value: "dark",
  },
  reducers: {
    toggle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggle } = themeToggleSlice.actions;

export default themeToggleSlice.reducer;
