import actions from "./actions";
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

const reducer = (state: IProductReducer, action: any) => {
  switch (action.type) {
    case actions.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: { ...state.error, products: "" },
      };
    case actions.GET_PRODUCTS_RESPONSE:
      return {
        ...state,
        loading: false,
        success: { ...state.success, products: action.payload },
      };
    case "GET_PRODUCTS_ERROR":
      return {
        ...state,
        loading: false,
        error: { ...state.error, products: action.payload },
      };
    case "SET_SELECTED_PRODUCT":
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
