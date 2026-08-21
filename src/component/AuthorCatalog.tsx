import { Flex } from '@mantine/core';
import type { Author } from '../store/types';
import { AuthorCard } from './AuthorCard';

interface AuthorCatalogProps {
  authors: Author[];
}

export const AuthorCatalog = ({ authors }: AuthorCatalogProps) => {
  return (
    <Flex
      mih={50}
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      {authors.map((author) => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </Flex>
  );
};
