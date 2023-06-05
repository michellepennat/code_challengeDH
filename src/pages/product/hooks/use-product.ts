import { useContext, useEffect, useState } from "react";
import {
  ProductsContext,
  ProductsDispatchContext,
} from "../../../services/product/store";
import ProductActions, {
  ProductActionsEnum,
} from "../../../services/product/actions";
import { IProduct } from "../../../services/product/interface";

export type enumFilter = "all" | "won" | "redeemed";

interface IUseProductProps {
  navigation: any;
}

const useProduct = ({ navigation }: IUseProductProps) => {
  const dispatch = useContext(ProductsDispatchContext);
  const { success, loading } = useContext(ProductsContext);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState<enumFilter>("all");

  const selectProduct = (product: IProduct) => {
    dispatch(ProductActions.SET_SELECTED_PRODUCT);
    navigation.navigate("detail", { id: product.id });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(ProductActions.GET_PRODUCTS_RESPONSE);
        const response = await fetch(
          "https://6222994f666291106a29f999.mockapi.io/api/v1/products"
        );
        const data = await response.json();

        dispatch({
          type: ProductActionsEnum.GET_PRODUCTS_RESPONSE,
          payload: data,
        });
        // dispatch({
        //   type: ProductActionsEnum.GET_PRODUCTS_LOADING,
        //   payload: false,
        // });
      } catch (error) {
        // dispatch({
        //   type: ProductActionsEnum.GET_PRODUCTS_ERROR,
        //   payload: error,
        // });
        // dispatch({
        //   type: ProductActionsEnum.GET_PRODUCTS_LOADING,
        //   payload: false,
        // });
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setTotal(
      success.products.reduce((acum, current) => {
        if (current.is_redemption) {
          return acum - current.points;
        } else {
          return acum + current.points;
        }
      }, 0)
    );
  }, [success.products]);

  return {
    products: success.products.filter((product) => {
      if (filter === "all") {
        return true;
      }
      if (filter === "won") {
        return !product.is_redemption;
      }
      if (filter === "redeemed") {
        return product.is_redemption;
      }
    }),
    total,
    setFilter,
    filter,
    loading,
    selectProduct,
  };
};

export default useProduct;
