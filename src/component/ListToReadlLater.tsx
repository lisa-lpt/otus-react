import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { ListToReadLaterItem } from './ListToReadLaterItem';

export const ListToReadLater = () => {
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
      <div>
        {items.map((item) => (
          <ListToReadLaterItem key={item.id} item={item} />
        ))}
      </div>
      <div>
        <span>Books in list:</span>
        <span>{totalQuantity}</span>
      </div>
    </section>
  );
};
