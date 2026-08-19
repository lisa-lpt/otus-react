import { createBrowserRouter } from 'react-router';
import { Layout } from '../component/Layout';
import {
  authorsCatalogLoader,
  bookIdLoader,
  booksCatalogLoader,
} from './loaders';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        {
          index: true,
          lazy: async () => {
            const { LoginPage } = await import('../pages/LoginPage');
            return { Component: LoginPage };
          },
        },
        {
          path: 'books',
          lazy: async () => {
            const { BookCatalogPage } =
              await import('../pages/BookCatalogPage');

            return { Component: BookCatalogPage };
          },
          loader: booksCatalogLoader,
        },
        {
          path: 'book/:id',
          lazy: async () => {
            const { BookPage } = await import('../pages/BookPage');
            return { Component: BookPage };
          },
          loader: bookIdLoader,
        },
        {
          path: 'authors',
          lazy: async () => {
            // await new Promise((resolve) => setTimeout(resolve, 4000));
            const { AuthorCatalogPage } =
              await import('../pages/AuthorCatalogPage');
            return { Component: AuthorCatalogPage };
          },
          loader: authorsCatalogLoader,
          children: [
            {
              path: ':authorId',
              lazy: async () => {
                const { BookPage } = await import('../pages/BookPage');
                return { Component: BookPage };
              },
            },
          ],
        },
        {
          path: 'readlater',
          lazy: async () => {
            const { ListToReadLaterPage } =
              await import('../pages/ListToReadLaterPage');
            return { Component: ListToReadLaterPage };
          },
        },
      ],
    },
  ],
  {
    basename: __BASE_PATH__,
  }
);
