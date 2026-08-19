import { Link } from 'react-router';
import { ListToReadLater } from '../component/ListToReadlLater';

export const ListToReadLaterPage: React.FC = () => {
  return (
    <div>
      <h2>Books to read later</h2>
      <Link to="/books">
        <button>Go back to books catalog</button>
      </Link>
      <ListToReadLater />
    </div>
  );
};
