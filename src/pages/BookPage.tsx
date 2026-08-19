import { Link, useLoaderData } from 'react-router';

export const BookPage: React.FC = () => {
  const book = useLoaderData();
  return (
    <div>
      <h2>{book.name}</h2>
      <Link to="/books">
        <button> to the book catalog</button>
      </Link>
      <img src={book.img} />
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <h4>Описание</h4>
      <p>{book.desc}</p>
    </div>
  );
};
