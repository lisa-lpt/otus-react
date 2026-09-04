import React from 'react';
import { Button, Flex } from '@mantine/core';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { ListToReadLaterItem } from './ListToReadLaterItem';
import { Link } from 'react-router';

const ListToReadLaterBase = () => {
  const { items, totalQuantity } = useSelector(
    (state: RootState) => state.list
  );

  if (items.length === 0) {
    return (
      <section>
        <p>No books in list</p>
      </section>
    );
  }

  return (
    <section>
      <Flex gap={10} justify="center" align="center" direction="row">
        <span>Books in list: {totalQuantity}</span>
        <Link to="/books">
          <Button variant="light" color="green">
            Go back to books catalog
          </Button>
        </Link>
      </Flex>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        {items.map((item) => (
          <ListToReadLaterItem key={item.id} item={item} />
        ))}
      </Flex>
    </section>
  );
};

export const ListToReadLater = React.memo(ListToReadLaterBase);
