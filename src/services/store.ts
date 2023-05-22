import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./product/slice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
