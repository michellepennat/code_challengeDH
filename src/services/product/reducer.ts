import { actions } from "./actions";
import { IProductAction, IProductReducer } from "./interface";

const reducer = (state: IProductReducer, action: IProductAction) => {
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
    case actions.GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: { ...state.error, products: action.payload },
      };
    case actions.SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
