import { describe, expect, it } from 'vitest';
import { AuthorCard } from './AuthorCard';
import { renderWithProviders } from '../test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('AuthorCard', () => {
  const authorMock = {
    id: 1,
    name: 'Fyodor Dostoevsky',
    img: 'https://literatura5.narod.ru/dostoevsky.jpg',
  };

  it('render author name', () => {
    renderWithProviders(<AuthorCard author={authorMock} />);

    expect(screen.getByText('Fyodor Dostoevsky')).toBeInTheDocument();
  });

  it('render img', () => {
    renderWithProviders(<AuthorCard author={authorMock} />);

    expect(
      screen.getAllByRole('link', {
        name: 'Fyodor Dostoevsky',
      })
    ).toHaveLength(2);

    expect(
      screen.getAllByRole('link', {
        name: 'Fyodor Dostoevsky',
      })[0]
    ).toHaveAttribute('href', '/author/1');

    expect(
      screen.getAllByRole('link', {
        name: 'Fyodor Dostoevsky',
      })[1]
    ).toHaveAttribute('href', '/author/1');
  });

  it('click link', async () => {
    const user = userEvent.setup();

    const { router } = renderWithProviders(<AuthorCard author={authorMock} />);

    const links = screen.getAllByRole('link', { name: authorMock.name });

    for (const link of links) {
      await user.click(link);
      expect(router.state.location.pathname).toBe('/author/1');
    }
  });
});
