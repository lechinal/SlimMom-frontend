import { createSlice } from '@reduxjs/toolkit';
import { registration, login, logOut } from '../auth/operations';
import { fetchsideBarInfo } from '../products/operations';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
  },
  extraReducers: builder => {
    builder.addCase(registration.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(registration.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(registration.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(login.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(logOut.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(logOut.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(fetchsideBarInfo.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchsideBarInfo.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(fetchsideBarInfo.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const loadingReducer = loadingSlice.reducer;
