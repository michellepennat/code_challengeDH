import { IProduct } from "./interface";

const actions: any = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCTS_RESPONSE: "GET_PRODUCTS_RESPONSE",
  GET_PRODUCTS_ERROR: "GET_PRODUCTS_ERROR",

  SET_SELECTED_PRODUCT: "SET_SELECTED_PRODUCT",
};

export const getProductAction = () => ({ type: actions.GET_PRODUCTS });

export const getProductResponseAction = (products: IProduct[]) => ({
  type: actions.GET_PRODUCTS_RESPONSE,
  payload: products,
});

export const setSelectedProductAction = (product: IProduct) => ({
  type: actions.SET_SELECTED_PRODUCT,
  payload: product,
});

export default actions;
