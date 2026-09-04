import { describe, expect, it } from 'vitest';
import { renderWithProviders, delay } from '../test';
import { Layout } from '../component/Layout';
import { screen } from '@testing-library/dom';
import { createMemoryRouter } from 'react-router';
import { BookCatalogPage } from './BookCatalogPage';
import userEvent from '@testing-library/user-event';

const booksMock = [
  {
    id: 1,
    name: 'Romeo and Juliet',
    author: 2,
    genre: 'Shakespearean tragedy',
    desc: "The greatest love story in English, William Shakespeare's Romeo and Juliet is a play of star-crossed lovers who take a valiant stand against social convention, with tragic consequences.",
    img: 'https://book-cover.ru/sites/default/files/styles/osn_530x/public/field/image/shekspir-romeo-i-djuljetta.jpg?itok=D5oXRQ4G',
  },
  {
    id: 2,
    name: 'Macbeth',
    author: 2,
    genre: 'Shakespearean tragedy',
    desc: 'Macbeth is a tragedy by William Shakespeare; it is thought to have been first performed in 1606. It dramatizes the damaging physical and psychological effects of political ambition on those who seek power for its own sake.',
    img: 'https://book-cover.ru/sites/default/files/styles/osn_530x/public/field/image/shekspir-makbet.jpg?itok=OrJOTUi0',
  },
  {
    id: 3,
    name: 'The Idiot',
    author: 1,
    genre: 'Novel',
    desc: 'Returning to St Petersburg from a Swiss sanatorium, the gentle and naïve epileptic Prince Myshkin— known as the “idiot”—pays a visit to his distant relative General Yepanchin and proceeds to charm the General and his family. But his life is thrown into turmoil when he chances on a photograph of the beautiful Nastasya Filippovna. Utterly infatuated, he soon finds himself caught up in a love triangle and drawn into a web of blackmail, betrayal, and finally, murder. In Prince Myshkin, Dostoyevsky portrays the purity of “a truly beautiful soul” and explores the perils that innocence and goodness face in a corrupt world.',
    img: 'https://book-cover.ru/sites/default/files/styles/osn_530x/public/field/image/dostoevskiy-idiot-amerika-13.jpg?itok=oWTIyQvO',
  },
];

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

describe('BookCatalogPage', () => {
  const createRouter = () => {
    return createMemoryRouter(
      [
        {
          path: '/',
          Component: Layout,
          children: [
            {
              path: 'books',
              lazy: async () => {
                await delay(100);
                return { Component: BookCatalogPage };
              },
              loader: async () => {
                await delay(200);
                return {
                  books: booksMock,
                  authors: authorsMock,
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
    router.navigate('/books');

    // ждем LoadingFallback
    expect(await screen.findByRole('status')).toBeInTheDocument();

    // ждем рендер всего Page
    const h2 = await screen.findByRole('heading', { level: 2 });

    expect(router.state.location.pathname).toBe('/books');
    expect(screen.queryByRole('status')).not.toBeInTheDocument();

    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent('All books');
  });

  it('click button', async () => {
    const user = userEvent.setup();

    const { router } = renderWithProviders(null, createRouter());

    router.navigate('/books');

    const authorsBtn = await screen.findByRole('button', {
      name: 'Change catalog to Authors',
    });

    await user.click(authorsBtn);
    expect(router.state.location.pathname).toBe('/authors');
  });
});
