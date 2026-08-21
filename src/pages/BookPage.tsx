import { Button, Flex, Image, Title } from '@mantine/core';
import { Link, useLoaderData } from 'react-router';

export const BookPage: React.FC = () => {
  const { bookIdData, authorIdData } = useLoaderData();
  return (
    <Flex
      direction="column"
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Flex justify="center" align="center" direction="column">
        <h2>{bookIdData.name}</h2>
        <Image src={bookIdData.img} w={400} />
        <Link to="/books">
          <Button variant="light" color="green">
            to the book catalog
          </Button>
        </Link>
      </Flex>
      <Flex gap={10} justify="center" align="center" direction="column">
        <Flex gap={10} justify="center" align="center" direction="column">
          <span> Title of the book: {bookIdData.name}</span>
          <span>
            Author:{' '}
            <Link to={`/author/${authorIdData.id}`}>{authorIdData.name}</Link>
          </span>
          <span>Genre: {bookIdData.genre}</span>
        </Flex>
        <Flex justify="center" align="center" direction="column">
          <Title order={4}>Description</Title>
          <p>{bookIdData.desc}</p>
        </Flex>
      </Flex>
    </Flex>
  );
};
