import { Flex, Image } from '@mantine/core';
import type React from 'react';

export const HomePage: React.FC = () => {
  return (
    <Flex justify="center" align="center" direction="column">
      <h2> Welcome to this small book notebook!</h2>
      <p>
        Here you can brouse book catalog and add books that interest you to the
        read later list. Each book has card with information about it. You can
        also check out author catalog and see what books each author wrote.
      </p>
      <Image
        src="https://www.mapleplanners.com/resources/img/2021/12/Reading-List.jpg"

        alt="notebook with books"
        w={500}
      />
    </Flex>
  );
};
