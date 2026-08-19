import { configureStore } from '@reduxjs/toolkit';
import { ListToReadLaterSlice } from './listToReadLaterSlice';

export const store = configureStore({
  reducer: {
    list: ListToReadLaterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
