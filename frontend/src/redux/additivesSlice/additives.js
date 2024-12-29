import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  selectedAdditives: [],
  title: "",
  basePrice: 0,
  totalPrice: 0,
  currentSize: "20",
  dough: "Традиционное",
};

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState: initialState,
  reducers: {
    selectPizza: (state, action) => {
      state.basePrice = action.payload.basePrice;
      state.totalPrice = action.payload.basePrice;
      state.selectedAdditives = [];
      state.currentSize = "20";
      state.dough = "Традиционное";
    },
    addPrise: (state, action) => {
      const { ingredient, price } = action.payload;
      if (state.selectedAdditives.includes(ingredient)) {
        state.selectedAdditives = state.selectedAdditives.filter(
          (item) => item !== ingredient
        );
        state.totalPrice -= price;
      } else {
        state.selectedAdditives.push(ingredient);
        state.totalPrice += price;
      }
    },
    addTotalPrise: (state, action) => {
      const sizePrice = {
        20: 0,
        28: 200,
        33: 400,
      };

      const newSizePrice = sizePrice[action.payload];
      if (newSizePrice === undefined) {
        console.error("Invalid size selected.");
        return;
      }

      state.selectedAdditives = [];
      state.totalPrice = state.basePrice + newSizePrice;

      state.currentSize = action.payload;
    },
    сhoosingDough: (state, action) => {
      state.dough = action.payload;
    },
    addToBasket: (state, action) => {
      const newPizza = {
        title: action.payload.title,
        id: action.payload.id,
        basePrice: state.basePrice,
        totalPrice: state.totalPrice,
        size: state.currentSize,
        dough: state.dough,
        img: action.payload.img,
        additives: [...state.selectedAdditives],
      };

      state.basket.push(newPizza);

      state.totalPrice = state.basket.reduce(
        (acc, pizza) => acc + pizza.totalPrice,
        0
      );
    },

    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter(
        (pizza) => pizza.id !== action.payload
      );

      state.totalPrice = state.basket.reduce(
        (acc, pizza) => acc + pizza.totalPrice,
        0
      );
    },
    clearBasket: () => {
      return initialState;
    },
  },
});

export const {
  addPrise,
  selectPizza,
  addTotalPrise,
  сhoosingDough,
  addToBasket,
  removeFromBasket,
  clearBasket,
} = pizzaSlice.actions;

export const selectOrderBasket = (state) => state.pizzaSlice.orderBasket;
export const selectTotalPrice = (state) => state.pizzaSlice.totalPrice;
export const selectAdditives = (state) => state.pizzaSlice.selectedAdditives;
export const selectBasePrice = (state) => state.pizzaSlice.basePrice;
export const selectDough = (state) => state.pizzaSlice.dough;
export const selectCurrentSize = (state) => state.pizzaSlice.currentSize;
export const selectBasket = (state) => state.pizzaSlice.basket;

export default pizzaSlice.reducer;
