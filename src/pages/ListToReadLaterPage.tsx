import { ListToReadLater } from '../component/ListToReadlLater';
import { Flex } from '@mantine/core';

export const ListToReadLaterPage: React.FC = () => {
  return (
    <Flex justify="center" align="center" direction="column">
      <h2>Read later list</h2>
      <ListToReadLater />
    </Flex>
  );
};
