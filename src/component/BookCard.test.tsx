import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../test';
import { screen } from '@testing-library/react';
import { BookCard } from './BookCard';
import userEvent from '@testing-library/user-event';

describe('BookCard', () => {
  const authorMock = {
    id: 2,
    name: 'William Shakespeare',
    img: 'https://literatura5.narod.ru/shakespeare1.jpg',
  };

  const bookMock = {
    id: 1,
    name: 'Romeo and Juliet',
    author: 2,
    genre: 'Shakespearean tragedy',
    desc: "The greatest love story in English, William Shakespeare's Romeo and Juliet is a play of star-crossed lovers who take a valiant stand against social convention, with tragic consequences.",
    img: 'https://book-cover.ru/sites/default/files/styles/osn_530x/public/field/image/shekspir-romeo-i-djuljetta.jpg?itok=D5oXRQ4G',
  };

  it('render author name', () => {
    renderWithProviders(<BookCard book={bookMock} author={authorMock} />);

    expect(screen.getByText('William Shakespeare')).toBeInTheDocument();
  });

  it('render img', () => {
    renderWithProviders(<BookCard book={bookMock} author={authorMock} />);

    expect(
      screen.getAllByRole('link', {
        name: 'Romeo and Juliet',
      })
    ).toHaveLength(2);

    expect(
      screen.getAllByRole('link', {
        name: 'Romeo and Juliet',
      })[0]
    ).toHaveAttribute('href', '/book/1');

    expect(
      screen.getAllByRole('link', {
        name: 'Romeo and Juliet',
      })[1]
    ).toHaveAttribute('href', '/book/1');

    expect(
      screen.getAllByRole('link', {
        name: 'William Shakespeare',
      })
    ).toHaveLength(1);

    expect(
      screen.getAllByRole('link', {
        name: 'William Shakespeare',
      })[0]
    ).toHaveAttribute('href', '/author/2');
  });

  it('click links', async () => {
    const user = userEvent.setup();

    const { router } = renderWithProviders(
      <BookCard book={bookMock} author={authorMock} />
    );

    const authorLinks = screen.getAllByRole('link', { name: authorMock.name });
    for (const link of authorLinks) {
      await user.click(link);
      expect(router.state.location.pathname).toBe('/author/2');
    }

    const bookLinks = screen.getAllByRole('link', { name: bookMock.name });
    for (const link of bookLinks) {
      await user.click(link);
      expect(router.state.location.pathname).toBe('/book/1');
    }
  });

  it('click read later', async () => {
    const user = userEvent.setup();

    const { store } = renderWithProviders(
      <BookCard book={bookMock} author={authorMock} />
    );

    const addBtn = screen.getByRole('button', {
      name: 'Add to read later list',
    });

    expect(store.getState().list.items.length).toBe(0);

    await user.click(addBtn);

    expect(store.getState().list.items.length).toBe(1);

    const removeBtn = screen.getByRole('button', {
      name: 'Remove from list',
    });

    await user.click(removeBtn);

    expect(store.getState().list.items.length).toBe(0);
  });
});
