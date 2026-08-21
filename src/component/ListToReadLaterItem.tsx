import { Link } from 'react-router';
import type { ListToReadLaterItemType } from '../store/types';
import { Button, Card, CardSection, Flex, Image, Title } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { removeFromList } from '../store/listToReadLaterSlice';

interface ListToReadLaterItemProps {
  item: ListToReadLaterItemType;
}
export const ListToReadLaterItem = ({ item }: ListToReadLaterItemProps) => {
  const dispatch = useDispatch();

  const handleRemoveFromList = () => {
    dispatch(removeFromList(item.id));
  };

  return (
    <Card>
      <CardSection>
        <Link to={`/book/${item.id}`}>
          <Image src={item.img} alt={item.name} w={400} />
        </Link>
      </CardSection>
      <Flex
        mih={30}
        gap={5}
        justify="center"
        align="center"
        direction="column"
        wrap="nowrap"
      >
        <Link to={`/book/${item.id}`}>
          <Title order={3}>{item.name}</Title>
        </Link>
        <Link to={`/author/${item.authorId}`}>
          <Title order={5}>{item.author}</Title>
        </Link>
        <Button variant="light" color="green" onClick={handleRemoveFromList}>
          Remove from list
        </Button>
      </Flex>
    </Card>
  );
};
