import { configureStore } from '@reduxjs/toolkit';
import { calculateTotals, ListToReadLaterSlice } from './listToReadLaterSlice';

const KEY = 'read later';

const loadState = () => {
  const savedJson = localStorage.getItem(KEY);
  try {
    const items = JSON.parse(savedJson!);

    return {
      list: {
        items,
        totalQuantity: calculateTotals(items),
      },
    };
  } catch {
    //
  }
};

export const store = configureStore({
  reducer: {
    list: ListToReadLaterSlice.reducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem(KEY, JSON.stringify(state.list.items));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
