import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [];

export const CartDataSlice = createSlice({
  name: "CartData",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
    },
    removeItemFromCart: (state, action: PayloadAction<any>) => {
      return state.filter((item: any) => item.id !== action.payload);
    },
    editCartItem: (
      state,
      action: PayloadAction<{ id: number; updatedData: Partial<any> }>
    ) => {
      const { id, updatedData } = action.payload;
      const item = state.find((item: any) => item.id === id);

      if (item) {
        Object.assign(item, updatedData);
      }
    },
  },
});

// Export actions for dispatch
export const { addItemToCart, removeItemFromCart, editCartItem } =
  CartDataSlice.actions;

// Export reducer for store
export default CartDataSlice.reducer;
