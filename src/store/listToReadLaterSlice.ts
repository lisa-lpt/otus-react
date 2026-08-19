import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  Book,
  ListToReadLaterItemType,
  ListToReadLaterState,
} from './types';

const initialState: ListToReadLaterState = {
  items: [],
  totalQuantity: 0,
};

const calculateTotals = (items: ListToReadLaterItemType[]) => {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  return totalQuantity;
};

export const ListToReadLaterSlice = createSlice({
  name: 'list to read later',
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<Book>) => {
      const book = action.payload;
      const existingItem = state.items.find((item) => item.id === book.id);

      if (!existingItem) {
        state.items.push({
          id: book.id,
          name: book.name,
          author: book.author,
          img: book.img,
          quantity: 1,
        });
      }
      const totals = calculateTotals(state.items);
      state.totalQuantity = totals;
    },
    removeFromList: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      const totals = calculateTotals(state.items);
      state.totalQuantity = totals;
    },
  },
});

export const { addToList, removeFromList } = ListToReadLaterSlice.actions;
