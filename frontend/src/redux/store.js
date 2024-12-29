import { configureStore } from "@reduxjs/toolkit";
import pizzaSliceReduser from "./additivesSlice/additives";
import basketSliceReduser from "./basketSlice/basket";
import filterSliceReducer from "./filterSlice/filter";
import registerSliceReducer from "./registerSlice/register";
import orderSliceReducer from "./orderSlice/orders";

const store = configureStore({
  reducer: {
    pizzaSlice: pizzaSliceReduser,
    basketSlice: basketSliceReduser,
    filterSlice: filterSliceReducer,
    registerSlice: registerSliceReducer,
    orderSlice: orderSliceReducer,
  },
});

export default store;
