import { createBrowserRouter } from 'react-router';
import { Layout } from '../component/Layout';
import { authorIdLoader, bookIdLoader, dataCatalogLoader } from './loaders';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        {
          index: true,
          lazy: async () => {
            const { HomePage } = await import('../pages/HomePage');
            return { Component: HomePage };
          },
        },
        {
          path: 'books',
          lazy: async () => {
            const { BookCatalogPage } =
              await import('../pages/BookCatalogPage');

            return { Component: BookCatalogPage };
          },
          loader: dataCatalogLoader,
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
          loader: dataCatalogLoader,
        },
        {
          path: 'author/:id',
          lazy: async () => {
            const { AuthorPage } = await import('../pages/AuthorPage');
            return { Component: AuthorPage };
          },
          loader: authorIdLoader,
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
