/* eslint-disable import/no-cycle */
import { all, fork } from "redux-saga/effects";
import ProductSaga from "../services/product/saga";

export default function* rootSaga() {
  yield all([fork(ProductSaga)]);
}
