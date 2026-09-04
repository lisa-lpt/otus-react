import React from 'react';
import { Flex } from '@mantine/core';
import type { Author, Book } from '../store/types';
import { BookCard } from './BookCard';

interface BookCatalogProps {
  products: Book[];
  authors: Author[];
}

const BookCatalogBase = ({ products, authors }: BookCatalogProps) => {
  return (
    <Flex
      mih={50}
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      {products.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          author={authors.find((author) => author.id === Number(book.author))!}
        />
      ))}
    </Flex>
  );
};

export const BookCatalog = React.memo(BookCatalogBase);
