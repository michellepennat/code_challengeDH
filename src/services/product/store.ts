import { useReducer } from "react";
import reducer from "./reducer";
import { INITIAL_STATE } from "./constants";
import { createContext } from "react";
import { IProductReducer } from "./interface";

export const ProductsContext = createContext(INITIAL_STATE as IProductReducer);
export const ProductsDispatchContext = createContext(null as any);

const useStore = () => {
  const [products, dispatch] = useReducer(reducer, INITIAL_STATE);

  return {
    products,
    dispatch,
    ProductsContext,
    ProductsDispatchContext,
  };
};

export default useStore;
