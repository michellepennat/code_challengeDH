/* eslint-disable import/no-cycle */
import { all, put, takeLatest } from "redux-saga/effects";
import ProductActions from "./actions";
import { ProductApi } from "./api";

function* getProducts(): Generator<any> {
  const response: any = yield ProductApi.getProducts();

  if (response) return yield put(ProductActions.getProductsResponse(response));
  const err = new TypeError(response.status);

  return yield put(ProductActions.getProductsResponse(err, response));
}

function* ActionWatcher() {
  yield takeLatest(ProductActions.getProducts, getProducts);
}

export default function* rootSaga() {
  yield all([ActionWatcher()]);
}
