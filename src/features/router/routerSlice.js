import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  loadingError: false,
  route: null,
};

const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    fetchRoute(state) {
      state.loading = true;
      state.loadingError = false;
    },
    fetchRouteSuccess(state, action) {
      state.route = action.payload;
      state.loading = false;
    },
    fetchRouteFailed(state) {
      state.loading = false;
      state.loadingError = true;
    },
  },
});

// Actions
export const routerActions = routerSlice.actions;
// // Selectors
export const routeLoading = (state) => state.router.loading;
export const routeLoadingError = (state) => state.router.loadingError;
export const selectRoute = (state) => state.router.route;
// Reducers
const routerReducer = routerSlice.reducer;
export default routerReducer;
