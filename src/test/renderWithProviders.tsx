import type React from 'react';
import {
  createMemoryRouter,
  RouterProvider,
  type DataRouter,
} from 'react-router';

import { render } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ListToReadLaterSlice } from '../store/listToReadLaterSlice';

export const renderWithProviders = (
  children: React.ReactNode,
  router?: DataRouter
) => {
  const store = configureStore({
    reducer: { list: ListToReadLaterSlice.reducer },
  });

  router =
    router ||
    createMemoryRouter(
      [
        {
          path: '*',
          element: children,
        },
      ],
      {
        initialEntries: ['/'],
      }
    );

  render(
    <MantineProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MantineProvider>
  );

  return { store, router };
};
