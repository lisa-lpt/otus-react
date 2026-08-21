import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToList, removeFromList } from '../store/listToReadLaterSlice';
import type { RootState } from '../store/store';
import { Button, Card, Flex, Image, Title } from '@mantine/core';
import type { Author, Book } from '../store/types';

interface BookCardProps {
  book: Book;
  author: Author;
}

export const BookCard = ({ book, author }: BookCardProps) => {
  const dispatch = useDispatch();

  const ListToReadItem = useSelector((state: RootState) =>
    state.list.items.find((item) => item.id === book.id)
  );

  const data = {
    book: { ...book },
    author: { ...author },
  };

  const handleAddToList = () => {
    dispatch(addToList(data));
  };

  const handleRemoveFromList = () => {
    dispatch(removeFromList(book.id));
  };

  return (
    <Card>
      <Card.Section>
        <Link to={`/book/${book.id}`}>
          <Image src={book.img} alt={book.name} w={400} />
        </Link>
      </Card.Section>
      <Flex
        mih={100}
        justify="space-around"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Flex
          mih={30}
          gap={5}
          justify="center"
          align="center"
          direction="column"
          wrap="nowrap"
        >
          <Link to={`/book/${book.id}`}>
            <Title order={3}>{book.name}</Title>
          </Link>
          <Link to={`/author/${author.id}`}>{author!.name}</Link>
        </Flex>
        <Flex
          mih={30}
          gap={5}
          justify="center"
          align="center"
          direction="column"
          wrap="nowrap"
        >
          {!ListToReadItem ? (
            <Button variant="light" color="green" onClick={handleAddToList}>
              <p>Add to read later list</p>
            </Button>
          ) : (
            <Button
              variant="light"
              color="green"
              onClick={handleAddToList}
              disabled
            >
              <p>In the read later list</p>
            </Button>
          )}
          <Button variant="light" color="green" onClick={handleRemoveFromList}>
            Remove from list
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
