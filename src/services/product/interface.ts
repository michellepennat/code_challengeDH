export interface IProduct {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: string;
  id: string;
}

export interface IProductReducer {
  loading: boolean;
  error: {
    products: string;
  };
  success: {
    products: IProduct[];
  };
  selectedProduct: IProduct | null;
}
