import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = { option: null, loaging: false, error: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    setOption(state, action) {
      state.option = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
