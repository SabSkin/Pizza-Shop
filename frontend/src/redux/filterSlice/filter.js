import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  generalFilter: [],
  cheesFilter: [],
  meetFilter: [],
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: initialState,
  reducers: {
    addGeneralFilter: (state, action) => {
      if (!state.generalFilter.includes(action.payload)) {
        state.generalFilter.push(action.payload);
      }
    },
    addCheesFilter: (state, action) => {
      if (!state.cheesFilter.includes(action.payload)) {
        state.cheesFilter.push(action.payload);
      }
    },
    addMeetFilter: (state, action) => {
      if (!state.meetFilter.includes(action.payload)) {
        state.meetFilter.push(action.payload);
      }
    },
    resetFilters: (state) => {
      state.generalFilter = [];
      state.cheesFilter = [];
      state.meetFilter = [];
    },
  },
});

export const { addGeneralFilter, addCheesFilter, addMeetFilter, resetFilters } =
  filterSlice.actions;

export const selectGeneralFilter = (state) => state.filterSlice.generalFilter;
export const selectCheeseFilter = (state) => state.filterSlice.cheesFilter;
export const selectMeetFilter = (state) => state.filterSlice.meetFilter;

export default filterSlice.reducer;
