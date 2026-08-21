import { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { useDebounce } from '../hooks/useDebounce';
import type { Author } from '../store/types';
import { AuthorCatalog } from '../component/AuthorCatalog';
import { Button, Flex, TextInput, Title } from '@mantine/core';

export const AuthorCatalogPage: React.FC = () => {
  const { authors } = useLoaderData();

  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useDebounce(searchTerm, 3000);

  const filteredAuthors = authors.filter((author: Author) =>
    author.name.toLowerCase().includes(debouncedSearch.toLowerCase())
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
        <Title order={2}> All authors</Title>
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
      <AuthorCatalog authors={filteredAuthors} />
    </div>
  );
};
