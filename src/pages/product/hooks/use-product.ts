import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/types/redux";
import ProductActions from "../../../services/product/actions";
import { IProduct } from "../../../services/product/interface";

export type enumFilter = "all" | "won" | "redeemed";

interface IUseProductProps{
  navigation: any;
}

const useProduct = ({navigation}: IUseProductProps) => {
  const dispatch = useAppDispatch();
  const { success, loading } = useAppSelector((state) => state.product);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState<enumFilter>("all");

  const selectProduct = (product: IProduct) => {
    dispatch(ProductActions.setSelectedProduct(product));
    navigation.navigate("detail", { id: product.id });
  };

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

  useEffect(() => {
    dispatch(ProductActions.getProducts());
  }, []);

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
    selectProduct
  };
};

export default useProduct;
