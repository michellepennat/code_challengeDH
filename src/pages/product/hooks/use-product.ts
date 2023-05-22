import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/types/redux";
import { getProducts } from "../../../services/product/thunk";
import { IProduct } from "../../../services/product/interface";
import { setSelectedProduct } from "../../../services/product/slice";

export type enumFilter = "all" | "won" | "redeemed";

interface IUseProductProps {
  navigation: any;
}

const useProduct = ({ navigation }: IUseProductProps) => {
  const dispatch = useAppDispatch();
  const { success, loading } = useAppSelector((state) => state.products);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState<enumFilter>("all");

  const selectProduct = (product: IProduct) => {
    dispatch(setSelectedProduct(product));
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
    dispatch(getProducts());
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
    selectProduct,
  };
};

export default useProduct;
