import { configureStore } from '@reduxjs/toolkit';
import { persistedContactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    // filter: '',
  },
});
