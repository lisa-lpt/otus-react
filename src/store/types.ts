export interface Book {
  id: number;
  name: string;
  author: string;
  desc: string;
  genre: string;
  img: string;
}

export interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

export interface ListToReadLaterItemType {
  id: number;
  name: string;
  author: string;
  img: string;
  quantity: number;
}

export interface ListToReadLaterState {
  items: ListToReadLaterItemType[];
  totalQuantity: number;
}
