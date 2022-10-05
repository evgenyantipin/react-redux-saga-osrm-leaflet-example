import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  loadingError: false,
  requests: [],
};

const requestListSlice = createSlice({
  name: 'requestList',
  initialState,
  reducers: {
    fetchRequestList(state, action) {
      state.loading = true;
      state.loadingError = false;
    },
    fetchRequestListSuccess(state, action) {
      state.requests = action.payload;
      state.loading = false;
    },
    fetchRequestListFailed(state, action) {
      state.loading = false;
      state.loadingError = true;
    },
  },
});

// Actions
export const requestListActions = requestListSlice.actions;

// // Selectors
export const requestListLoading = (state) => state.requestList.loading;
export const requestListLoadingError = (state) =>
  state.requestList.loadingError;
export const selectListRequests = (state) => state.requestList.requests;

// export const selectOriginal = (state) => state.requestList.requests.map(r => r.original);

// Reducers
const serviceListReducer = requestListSlice.reducer;
export default serviceListReducer;
