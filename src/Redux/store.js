import { configureStore } from '@reduxjs/toolkit';
import { summReducer } from './summSlice';

export const store = configureStore({
  reducer: {
    summ: summReducer,
  },
});
