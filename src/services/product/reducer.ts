import { handleActions } from "redux-actions";
import { IProduct, IProductReducer } from "./interface";

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

const reducer = handleActions(
  {
    PRODUCT: {
      GET_PRODUCTS: (state: IProductReducer) => ({
        ...state,
        loading: true,
        error: { ...state.error, products: "" },
      }),
      GET_PRODUCTS_RESPONSE: {
        next(state: IProductReducer, { payload }: any) {
          return {
            ...state,
            loading: false,
            success: { ...state.success, products: payload },
          };
        },
        throw(state: IProductReducer, { payload: { message } }: any) {
          return {
            ...state,
            loading: false,
            error: { ...state.error, products: message },
          };
        },
      },

      SET_SELECTED_PRODUCT: (
        state: IProductReducer,
        { payload: product }: { payload: IProduct }
      ) => ({
        ...state,
        selectedProduct: product,
      }),
    },
  },
  INITIAL_STATE
);

export default reducer;
