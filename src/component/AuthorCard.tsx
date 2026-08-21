import React from 'react';
import { Card, CardSection, Flex, Image, Title } from '@mantine/core';
import { Link } from 'react-router';
import type { Author } from '../store/types';

interface BookCardProps {
  author: Author;
}

const AuthorCardBase = ({ author }: BookCardProps) => {
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

export const AuthorCard = React.memo(AuthorCardBase);
