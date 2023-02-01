import { createSlice } from "@reduxjs/toolkit";

const getSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cartArr: [],
    totalprice: 0,
    loading: false,
  },
  reducers: {
    getAllProducts: (state, action) => {
      let data = {
        ...state,
        products: action.payload,
      };
      return (state = data);
    },
    addToCart: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        cartArr: [...state.cartArr, action.payload],
      };
    },
    removeCart: (state, action) => {
      const productId = action.payload.id;
      state.cartArr = state.cartArr.filter((e) => e.id !== productId);
    },
    totalAmount: (state) => {
      const totalprice = state.cartArr.reduce(
        (a, c) => c.price * c.count + a,
        0
      );
      return { ...state, totalprice };
    },
  },
});

export const { getAllProducts, addToCart, removeCart, searching, totalAmount } =
  getSlice.actions;

export default getSlice.reducer;
