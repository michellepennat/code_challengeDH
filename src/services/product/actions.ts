import { IProduct } from "./interface";

export enum ProductActionsEnum {
  GET_PRODUCTS_RESPONSE = "GET_PRODUCTS_RESPONSE",
  GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING",
  GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR",
  SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT",
}

const ProductActions = {
  GET_PRODUCTS_RESPONSE: (products: IProduct[]) => ({
    type: ProductActionsEnum.GET_PRODUCTS_RESPONSE,
    payload: products,
  }),
  GET_PRODUCTS_LOADING: (products: IProduct[]) => ({
    type: ProductActionsEnum.GET_PRODUCTS_LOADING,
    payload: products,
  }),
  GET_PRODUCTS_ERROR: (products: IProduct[]) => ({
    type: ProductActionsEnum.GET_PRODUCTS_ERROR,
    payload: products,
  }),
  SET_SELECTED_PRODUCT: (product: IProduct) => ({
    type: ProductActionsEnum.SET_SELECTED_PRODUCT,
    payload: product,
  }),
};

export default ProductActions;
