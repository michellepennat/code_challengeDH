import { createActions } from "redux-actions";
import { IProduct } from "./interface";

const { product }: any = createActions({
  PRODUCT: {
    GET_PRODUCTS: () => ({}),
    GET_PRODUCTS_RESPONSE: (products: IProduct[]) => products,

    SET_SELECTED_PRODUCT: (product: IProduct) => (product),
  },
});

export default product;
