import { Link, useLoaderData } from 'react-router';
import type { Book } from '../store/types';
import { BookCard } from '../component/BookCard';
import { Button, Flex, Image, Title } from '@mantine/core';

export const AuthorPage: React.FC = () => {
  const { bookIdData, authorIdData } = useLoaderData();
  return (
    <Flex gap={10} justify="center" align="center" direction="column">
      <Flex gap={10} justify="center" align="center" direction="column">
        <h2>{authorIdData.name}</h2>
        <Image src={authorIdData.img} w={300} />
        <Flex gap={10} justify="space-between" align="center" direction="row">
          <Title order={4}>All works:</Title>
          <Link to="/authors">
            <Button variant="light" color="green">
              To the author catalog
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        {bookIdData.map((book: Book) => (
          <BookCard key={book.id} book={book} author={authorIdData} />
        ))}
      </Flex>
    </Flex>
  );
};
