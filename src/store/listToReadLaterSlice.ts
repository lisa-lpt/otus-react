import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  Data,
  ListToReadLaterItemType,
  ListToReadLaterState,
} from './types';

const initialState: ListToReadLaterState = {
  items: [],
  totalQuantity: 0,
};

export const calculateTotals = (items: ListToReadLaterItemType[]) => {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  return totalQuantity;
};

export const ListToReadLaterSlice = createSlice({
  name: 'list to read later',
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<Data>) => {
      const book = action.payload;
      const existingItem = state.items.find((item) => item.id === book.book.id);

      if (!existingItem) {
        state.items.push({
          id: book.book.id,
          name: book.book.name,
          authorId: book.author.id,
          author: book.author.name,
          img: book.book.img,
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
