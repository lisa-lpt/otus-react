import { describe, expect, it } from 'vitest';
import { renderWithProviders, delay } from '../test';
import { Layout } from '../component/Layout';
import { screen } from '@testing-library/dom';
import { createMemoryRouter } from 'react-router';
import { BookPage } from './BookPage';

const book2 = {
  id: 2,
  name: 'Macbeth',
  author: 2,
  genre: 'Shakespearean tragedy',
  desc: 'Macbeth is a tragedy by William Shakespeare; it is thought to have been first performed in 1606. It dramatizes the damaging physical and psychological effects of political ambition on those who seek power for its own sake.',
  img: 'https://book-cover.ru/sites/default/files/styles/osn_530x/public/field/image/shekspir-makbet.jpg?itok=OrJOTUi0',
};

const author2 = {
  id: 2,
  name: 'William Shakespeare',
  img: 'https://literatura5.narod.ru/shakespeare1.jpg',
};

describe('BookPage', () => {
  const createRouter = () => {
    return createMemoryRouter(
      [
        {
          path: '/',
          Component: Layout,
          children: [
            {
              path: 'book/:id',
              lazy: async () => {
                await delay(100);
                return { Component: BookPage };
              },
              loader: async () => {
                await delay(200);
                return {
                  bookIdData: book2,
                  authorIdData: author2,
                };
              },
            },
          ],
        },
      ],
      { initialEntries: ['/'] }
    );
  };

  it('render page', async () => {
    const { router } = renderWithProviders(null, createRouter());

    // ждем рендера Layout
    expect(await screen.findByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    // запускаем навигацию
    router.navigate('/book/2');

    // ждем LoadingFallback
    expect(await screen.findByRole('status')).toBeInTheDocument();

    // ждем рендер всего Page
    const h2 = await screen.findByRole('heading', { level: 2 });

    expect(router.state.location.pathname).toBe('/book/2');
    expect(screen.queryByRole('status')).not.toBeInTheDocument();

    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent(book2.name);
  });
});
