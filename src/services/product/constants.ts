import { IProductReducer } from "./interface";

export const INITIAL_STATE: IProductReducer = {
  loading: false,
  error: {
    products: "",
  },
  success: {
    products: [],
  },
  selectedProduct: null,
};
