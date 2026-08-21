import { useMemo, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { Link, useLoaderData } from 'react-router';
import { BookCatalog } from '../component/BookCatalog';
import type { Book } from '../store/types';
import { Button, Flex, TextInput, Title } from '@mantine/core';

export const BookCatalogPage: React.FC = () => {
  const { books, authors } = useLoaderData();

  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useDebounce(searchTerm, 500);

  const filteredBooks = useMemo(
    () =>
      books.filter((book: Book) =>
        book.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      ),
    [books, debouncedSearch]
  );

  return (
    <div>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="nowrap"
      >
        <Title order={2}> All books</Title>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ sm: 'center' }}
        >
          <Flex align="center">
            <TextInput
              size="md"
              type="text"
              value={searchTerm}
              placeholder="Type to search by name"
              onChange={(e) => setSearchTerm(e.target.value)}
              w={400}
            />
          </Flex>
          <Flex
            gap={2}
            direction={{ base: 'row', sm: 'column' }}
            justify={{ sm: 'center' }}
          >
            <Link to="/authors">
              <Button variant="light" color="green" size="xs">
                Change catalog to Authors
              </Button>
            </Link>
            <Link to="/readlater">
              <Button variant="light" color="green" size="xs">
                Go to read later list
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <BookCatalog products={filteredBooks} authors={authors} />
    </div>
  );
};
