import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
