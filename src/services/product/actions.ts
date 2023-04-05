import { createActions } from "redux-actions";
import { IProduct } from "./interface";

const { product }: any = createActions({
  PRODUCT: {
    GET_PRODUCTS: () => ({}),
    GET_PRODUCTS_RESPONSE: (products: IProduct[]) => products,
  },
});

export default product;
