import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: initialState,
  reducers: {
    addNewOrder: (state, action) => {
      const {
        userName,
        userPhone,
        userEmail,
        payment,
        dataOrder,
        dataOrderTime,
        restaurant,
        street,
        home,
        entrance,
        floor,
        apartment,
        intercom,
        ingredient,
        totalPrise,
        сurrentSize,
        dough,
        buttonForm,
      } = action.payload;
      const newOrder = {
        id: uuidv4(),
        userName,
        userPhone,
        userEmail,
        street,
        home,
        entrance,
        floor,
        apartment,
        intercom,
        restaurant,
        dataOrder,
        dataOrderTime,
        ingredient,
        payment,
        totalPrise,
        сurrentSize,
        dough,
        buttonForm,
        orderBasketValue: [],
      };
      state.push(newOrder);
    },
    addOrderBasketValue: (state, action) => {
      const copiedBasket = action.payload;

      const lastOrder = state[state.length - 1];

      if (lastOrder) {
        lastOrder.orderBasketValue = copiedBasket;
      }
    },

    orderComplited: (state, action) => {
      return state.filter((order) => order.id !== action.payload);
    },

    deleteAllOrder: () => {
      return initialState;
    },
  },
});

export const {
  addNewOrder,
  orderComplited,
  deleteAllOrder,
  addOrderBasketValue,
} = orderSlice.actions;
export const selectNewOrder = (state) => state.orderSlice;

export default orderSlice.reducer;
