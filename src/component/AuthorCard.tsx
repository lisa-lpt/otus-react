import { Link } from 'react-router';
import type { Author } from '../store/types';
import { Card, CardSection, Flex, Image, Title } from '@mantine/core';

interface BookCardProps {
  author: Author;
}

export const AuthorCard = ({ author }: BookCardProps) => {
  return (
    <Card>
      <CardSection>
        <Link to={`/author/${author.id}`}>
          <Image src={author.img} alt={author.name} w={300} />
        </Link>
      </CardSection>
      <Flex justify={'center'} align={'center'}>
        <Link to={`/author/${author.id}`}>
          <Title order={4}>{author.name}</Title>
        </Link>
      </Flex>
    </Card>
  );
};
