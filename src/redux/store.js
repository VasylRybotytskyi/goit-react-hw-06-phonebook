import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const initialState = {
  contacts: [],
  filter: '',
};

const rootReducer = (state = initialState) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
