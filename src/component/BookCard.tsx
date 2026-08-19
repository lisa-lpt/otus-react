import { Link } from 'react-router';
import type { Book } from '../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { addToList, removeFromList } from '../store/listToReadLaterSlice';
import type { RootState } from '../store/store';

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const dispatch = useDispatch();
  const ListToReadItem = useSelector((state: RootState) =>
    state.list.items.find((item) => item.id === book.id)
  );

  const handleAddToList = () => {
    dispatch(addToList(book));
  };

  const handleRemoveFromList = () => {
    dispatch(removeFromList(book.id));
  };

  return (
    <div>
      <Link to={`/book/${book.id}`}>
        <img src={book.img} alt={book.name} />
      </Link>
      <div>
        <Link to={`/book/${book.id}`}>
          <h3>{book.name}</h3>
        </Link>
        <h4>{book.author}</h4>
      </div>
      <div>
        <button onClick={handleAddToList}>Add to read later list</button>
        <button onClick={handleRemoveFromList}>Remove from list</button>
        <Link to={`/book/${book.id}`}> Подробнее</Link>
      </div>
      {ListToReadItem && (
        <div>
          <span>In the List to Read Later</span>
        </div>
      )}
    </div>
  );
};
