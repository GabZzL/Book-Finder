import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const uiInitialState = { option: null, loading: false, error: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    setOption(state, action) {
      state.option = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
