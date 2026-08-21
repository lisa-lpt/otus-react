import type { LoaderFunctionArgs } from 'react-router';
import type { Author, Book } from '../store/types';

export const booksCatalogLoader = async () => {
  const booksJson = await fetch(__BASE_PATH__ + 'books.json');
  if (!booksJson.ok) {
    throw new Response('Failed to load books', {
      status: booksJson.status,
    });
  }
  const booksData = await booksJson.json();
  return booksData;
};

export const authorsCatalogLoader = async () => {
  const authorsJson = await fetch(__BASE_PATH__ + 'authors.json');
  if (!authorsJson.ok) {
    throw new Response('Failed to load authors', {
      status: authorsJson.status,
    });
  }
  const authorsData = await authorsJson.json();
  return authorsData;
};

export const dataCatalogLoader = async () => {
  const books = await booksCatalogLoader();
  const authors = await authorsCatalogLoader();
  return { books, authors };
};

export const bookIdLoader = async ({ params }: LoaderFunctionArgs) => {
  const booksJson = await dataCatalogLoader();
  const { books, authors } = booksJson;

  const bookIdData = books.find((book: Book) => book.id === Number(params.id));

  if (!bookIdData) {
    throw new Response('Book not found', {
      status: 404,
    });
  }

  const authorIdData = authors.find(
    (author: Author) => author.id === Number(bookIdData.author)
  );

  if (!authorIdData) {
    throw new Response('author not found', {
      status: 404,
    });
  }

  return { bookIdData, authorIdData };
};

export const authorIdLoader = async ({ params }: LoaderFunctionArgs) => {
  const booksJson = await dataCatalogLoader();
  const { books, authors } = booksJson;

  const authorIdData = authors.find(
    (author: Author) => author.id === Number(params.id)
  );

  if (!authorIdData) {
    throw new Response('Author not found', {
      status: 404,
    });
  }

  const bookIdData = books.filter(
    (book: Book) => book.author === authorIdData.id
  );
  if (!bookIdData) {
    throw new Response('Books not found', {
      status: 404,
    });
  }

  return { bookIdData, authorIdData };
};
