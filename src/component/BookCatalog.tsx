import type { Book } from '../store/types';
import { BookCard } from './BookCard';

interface BookCatalogProps {
  products: Book[];
}

export const BookCatalog: React.FC<BookCatalogProps> = ({ products }) => {
  return (
    <section>
      <div>
        {products.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};
