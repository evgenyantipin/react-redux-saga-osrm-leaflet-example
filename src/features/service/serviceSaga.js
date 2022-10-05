// import { call, put, takeLatest } from 'redux-saga/effects';
// import serviceApi from '../../api/serviceApi';
// import { serviceActions } from './serviceSlice';

// function* fetchService(action) {
//   try {
//     const response = yield call(serviceApi.getById, action.payload);
//     yield put(serviceActions.fetchServiceSuccess(response));
//   } catch (error) {
//     yield put(serviceActions.fetchServiceFailed(error));
//   }
// }

// export default function* serviceSaga() {
//   yield takeLatest(serviceActions.fetchService.type, fetchService);
// }
