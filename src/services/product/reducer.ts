import { ProductActionsEnum } from "./actions";
import { IProductAction, IProductReducer } from "./interface";

const reducer = (state: IProductReducer, action: IProductAction) => {
  switch (action.type) {
    case ProductActionsEnum.GET_PRODUCTS_RESPONSE:
      return {
        ...state,
        loading: false,
        success: { ...state.success, products: action.payload },
      };
    case ProductActionsEnum.GET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ProductActionsEnum.GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: { ...state.error, products: action.payload },
      };
    case ProductActionsEnum.SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
