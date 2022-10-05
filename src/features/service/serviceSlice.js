// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   loading: true,
//   loadingError: false,
//   item: null,
// };

// const serviceSlice = createSlice({
//   name: 'service',
//   initialState,
//   reducers: {
//     fetchService(state, action) {
//       state.loading = true;
//       state.loadingError = false;
//     },
//     fetchServiceSuccess(state, action) {
//       state.item = action.payload;
//       state.loading = false;
//     },
//     fetchServiceFailed(state, action) {
//       state.loading = false;
//       state.loadingError = true;
//     },
//   },
// });

// // Actions
// export const serviceActions = serviceSlice.actions;
// // // Selectors
// export const serviceLoading = (state) => state.service.loading;
// export const serviceLoadingError = (state) => state.service.loadingError;
// export const selectItem = (state) => state.service.item;

// // Reducers
// const serviceReducer = serviceSlice.reducer;
// export default serviceReducer;
