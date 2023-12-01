import { createSlice } from '@reduxjs/toolkit';

const summSlice = createSlice({
  name: 'summ',
  initialState: {
    balance: '',
  },
  reducers: {
    plus(state, action) {
      state.balance += action.payload;
    },
    minus(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const summReducer = summSlice.reducer;

export const { plus, minus } = summSlice.actions;
