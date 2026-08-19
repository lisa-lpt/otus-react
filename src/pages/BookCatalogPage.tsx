import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { Link, useLoaderData } from 'react-router';
import type { Book } from '../store/types';
import { BookCatalog } from '../component/BookCatalog';

export const BookCatalogPage: React.FC = () => {
  const books = useLoaderData() as Book[];

  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useDebounce(searchTerm, 300);

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div>
      <h2> All books</h2>
      <div>
        <input
          type="text"
          value={searchTerm}
          placeholder="Type to search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/authors">
          <button>Change catalog to Authors</button>
        </Link>
        <Link to="/readlater">
          <button>Go to list to read Later</button>
        </Link>
      </div>
      <BookCatalog products={filteredBooks} />
    </div>
  );
};
