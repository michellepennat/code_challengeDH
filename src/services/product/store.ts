import { useReducer } from "react";
import reducer from "./reducer";
import { INITIAL_STATE } from "./constants";
import { createContext } from "react";
import { IProductReducer } from "./interface";

const useStore = () => {
  const [products, dispatch] = useReducer(reducer, INITIAL_STATE);
  const ProductsContext = createContext(INITIAL_STATE as IProductReducer);
  const ProductsDispatchContext = createContext(null as any);

  return {
    products,
    dispatch,
    ProductsContext,
    ProductsDispatchContext,
  };
};

export default useStore;
