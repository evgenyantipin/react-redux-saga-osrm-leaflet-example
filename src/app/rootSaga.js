import routerSaga from "../features/router/routerSaga";
import requstListSaga from "../features/requestList/requestListSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([routerSaga(), requstListSaga()]);
}
