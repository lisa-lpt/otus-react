export interface Book {
  id: number;
  name: string;
  author: string;
  desc: string;
  genre: string;
  img: string;
}

export interface Author {
  id: number;
  name: string;
  img: string;
}

export interface Data {
  book: Book;
  author: Author;
}

export interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

export interface ListToReadLaterItemType {
  id: number;
  name: string;
  authorId: number;
  author: string;
  img: string;
  quantity: number;
}

export interface ListToReadLaterState {
  items: ListToReadLaterItemType[];
  totalQuantity: number;
}
