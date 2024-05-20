// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice2 = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    addCartItem: (state, action) => {
      state.push(action.payload);
    },
    removeCartItem: (state, action) => {
      return state.filter((item, index) => item.id !== action.payload);
    },
    clearCart: state => {
      return state = [];
    },
  },
});

export const { addCartItem, removeCartItem, clearCart} = cartSlice2.actions;

export default cartSlice2.reducer;
