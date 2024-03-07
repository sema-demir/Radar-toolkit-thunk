import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../action/flightAction";

const initialState = {
  isLoading: false,
  isError: false,
  flights: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFlights.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    });
  },
});

export default flightSlice.reducer;
