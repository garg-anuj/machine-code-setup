import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], //{}
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item?.id === newItem?.id);
      if (existingItem) {
        // existingItem.totalQuantity += newItem?.quantity;
        existingItem.quantity++;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalAmount: Math.floor(newItem?.price),
        });
      }
      state.totalQuantity++;
      state.totalAmount = state.items.reduce((total, item) => {
        total = total + item?.quantity * item?.price;
        return total;
      }, 0);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item?.id === id);

      console.log(id);
      console.log(existingItem);

      if (existingItem) {
        state.totalQuantity = existingItem.quantity - 1;
        console.log("worling", state.totalQuantity);

        state.totalAmount = state.items.reduce((total, item) => {
          total = total + item?.quantity * item?.price;
        }, 0);
      } else {
        state.totalQuantity = 0;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// {
//   id: {
//     productData;
//   }
// }
