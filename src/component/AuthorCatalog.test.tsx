import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../test';
import { AuthorCatalog } from './AuthorCatalog';
import { screen } from '@testing-library/react';

describe('AuthorCatalog', () => {
  const authorsMock = [
    {
      id: 1,
      name: 'Fyodor Dostoevsky',
      img: 'https://literatura5.narod.ru/dostoevsky.jpg',
    },
    {
      id: 2,
      name: 'William Shakespeare',
      img: 'https://literatura5.narod.ru/shakespeare1.jpg',
    },
  ];

  it('renders all authors', () => {
    renderWithProviders(<AuthorCatalog authors={authorsMock} />);

    expect(screen.getByText('Fyodor Dostoevsky')).toBeInTheDocument();

    expect(screen.getByText('William Shakespeare')).toBeInTheDocument();

    expect(screen.queryByText('Leo Tolstoy')).not.toBeInTheDocument();
  });
});
