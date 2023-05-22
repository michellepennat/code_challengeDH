import { useAppSelector } from "../../../services/types/redux";

const useDetailProduct = () => {
  const { selectedProduct } = useAppSelector((state) => state.products);

  return {
    selectedProduct,
  };
};

export default useDetailProduct;
