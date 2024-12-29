import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  finishprise: 0,
  value: [],
  selectedAdditives: [],
  totalPrise: 0,
  finaleInfoUser: {
    name: "",
    phone: "",
    email: "",
  },
  finalOrderDelivery: {
    street: "",
    home: "",
    entrance: "",
    floor: "",
    apartment: "",
    intercom: "",
    type: true,
  },
  finalOrderPickup: {
    pickup: "",
    type: false,
  },
  orderTime: {
    data: "",
    time: "",
    type: false,
  },
  orderPayment: {
    cash: true,
    card: false,
  },
};

const basketSlice = createSlice({
  name: "basketSlice",
  initialState: initialState,
  reducers: {
    addFinishPrise: (state, action) => {
      state.finishprise += action.payload;
    },
    addObjectValue: (state, action) => {
      state.value.push(action.payload);
    },
    deleteObjectValue: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    addFinaleInfoUser: (state, action) => {
      const { userName, userPhone, userEmail } = action.payload;
      state.finaleInfoUser.name = userName;
      state.finaleInfoUser.phone = userPhone;
      state.finaleInfoUser.email = userEmail;
    },
    addFinalOrderDelivery: (state, action) => {
      const { street, home, entrance, floor, apartment, intercom, buttonForm } =
        action.payload;
      state.finalOrderDelivery.street = street;
      state.finalOrderDelivery.home = home;
      state.finalOrderDelivery.entrance = entrance;
      state.finalOrderDelivery.floor = floor;
      state.finalOrderDelivery.apartment = apartment;
      state.finalOrderDelivery.intercom = intercom;
      if (buttonForm === "Доставка") {
        state.finalOrderDelivery.type = true;
      } else if (buttonForm === "Самовывоз") {
        state.finalOrderDelivery.type = false;
      }
    },
    addFinalOrderPickup: (state, action) => {
      const { restaurant, buttonForm } = action.payload;
      state.finalOrderPickup.pickup = restaurant;
      if (buttonForm === "Доставка") {
        state.finalOrderPickup.type = false;
      } else if (buttonForm === "Самовывоз") {
        state.finalOrderPickup.type = true;
      }
    },
    addOrderTime: (state, action) => {
      const { dataOrder, dataOrderTime, selectedOption } = action.payload;
      state.orderTime.data = dataOrder.toString();
      state.orderTime.time = dataOrderTime;
      if (selectedOption === "option2") {
        state.orderTime.type = true;
      }
    },
    addOrderPayment: (state, action) => {
      const { payment } = action.payload;
      if (payment === "option1") {
        state.orderPayment.cash = true;
        state.orderPayment.card = false;
      } else if (payment === "option2") {
        state.orderPayment.cash = false;
        state.orderPayment.card = true;
      }
    },
    addAdditives: (state, action) => {
      const { ingredient } = action.payload;
      if (state.selectedAdditives.includes(ingredient)) {
        state.selectedAdditives = state.selectedAdditives.filter(
          (item) => item !== ingredient
        );
      } else {
        state.selectedAdditives.push(ingredient);
      }
    },
    addTotalPrise: (state, action) => {
      state.totalPrise = action.payload;
    },
  },
});

export const {
  addFinishPrise,
  addObjectValue,
  deleteObjectValue,
  addFinalOrderDelivery,
  addFinalOrderPickup,
  addOrderTime,
  addOrderPayment,
  addFinaleInfoUser,
  addTotalPrise,
  addAdditives,
} = basketSlice.actions;

export const selectFinishPrise = (state) => state.basketSlice.finishprise;
export const selectTotalPrise = (state) => state.basketSlice.totalPrise;
export const selectAdditives = (state) => state.basketSlice.selectedAdditives;
export const selectValueBasket = (state) => state.basketSlice.value;
export const selectFinaleInfoUser = (state) => state.basketSlice.finaleInfoUser;
export const selectAddOrderTime = (state) => state.basketSlice.orderTime;
export const selectAddOrderPayment = (state) => state.basketSlice.orderPayment;

export const selectFinalOrderDelivery = (state) =>
  state.basketSlice.finalOrderDelivery;
export const selectFinalOrderPickup = (state) =>
  state.basketSlice.finalOrderPickup;

export default basketSlice.reducer;
