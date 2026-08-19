import type { LoaderFunctionArgs } from 'react-router';
import type { Book } from '../store/types';

export const booksCatalogLoader = async () => {
  const booksJson = await fetch(__BASE_PATH__ + 'books.json');
  const booksData = await booksJson.json();
  return booksData;
};

export const bookIdLoader = async ({ params }: LoaderFunctionArgs) => {
  const booksJson = await fetch(__BASE_PATH__ + 'books.json');
  if (!booksJson.ok) {
    throw new Response('Failed to load books', {
      status: booksJson.status,
    });
  }
  const booksData = await booksJson.json();

  const bookIdData = booksData.find(
    (book: Book) => book.id === Number(params.id)
  );

  if (!bookIdData) {
    throw new Response('Book not found', {
      status: 404,
    });
  }

  return bookIdData;
};

export const authorsCatalogLoader = async () => {
  const authorsJson = await fetch(__BASE_PATH__ + 'authors.json');
  const authorsData = await authorsJson.json();
  return authorsData;
};

export const dataCatalogLoader = async () => {
  const books = await booksCatalogLoader();
  const authors = await authorsCatalogLoader();
  return { books, authors };
};
