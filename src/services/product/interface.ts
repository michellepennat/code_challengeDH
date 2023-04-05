export interface IProduct {
  id: string;
  createdAt: string;
  nameProduct: string;
  points: number;
  image: string;
  isRedemption: string;
}

export interface IProductReducer {
  loading: boolean;
  error: {
    products: string;
  };
  success: {
    products: IProduct[];
  };
}
