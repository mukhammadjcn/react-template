import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IOrderState {
  all: any;
}

const initialState: IOrderState = {
  all: {},
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    add: (state, action) => {
      state.all[action.payload.id] = action.payload;
    },
    set: (state, action) => {
      state.all = action.payload;
    },
    remove: (state, action: PayloadAction<string>) => {
      delete state.all[action.payload];
    },
    clear: (state) => {
      state.all = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, set, remove, clear } = orderSlice.actions;

export default orderSlice.reducer;
