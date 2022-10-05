import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import routerReducer from "../features/router/routerSlice";
import requestListReducer from "../features/requestList/requestListSlice";
import rootSaga from "./rootSaga";

const loggerMiddleware = createLogger({
  collapsed: false,
});

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  router: routerReducer,
  requestList: requestListReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, loggerMiddleware),
});

sagaMiddleware.run(rootSaga);
