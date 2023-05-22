import { createSlice } from "@reduxjs/toolkit";
import { IProductReducer } from "./interface";
import { getProducts } from "./thunk";

export const initialState: IProductReducer = {
  loading: false,
  error: {
    products: "",
  },
  success: {
    products: [],
  },
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.success.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error.products = String(action.payload);
    });
  },
});

export const { setSelectedProduct } = productsSlice.actions;
