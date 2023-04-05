import { combineReducers } from "redux";
import productReducer from "../services/product/reducer";

const appReducer = () =>
  combineReducers({
    product: productReducer,
  });

const rootReducer = () => (state: any, action: any) => {
  return appReducer()(state, action);
};

export default rootReducer;
