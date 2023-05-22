import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductApi } from "./api";

export const getProducts: any = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    const response: any = await ProductApi.getProducts();
    if (response) return response;
    rejectWithValue("No hay conexión");
  }
);
