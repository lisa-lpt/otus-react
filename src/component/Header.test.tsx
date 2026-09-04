import { describe, expect, it } from 'vitest';
import { Header } from './Header';
import { screen } from '@testing-library/dom';
import { renderWithProviders } from '../test';

describe('Header', () => {
  it('render navlinks', () => {
    renderWithProviders(<Header />);
    expect(
      screen.getByRole('link', {
        name: 'Home page',
      })
    ).toHaveAttribute('href', '/');

    expect(
      screen.getByRole('link', {
        name: 'Book catalog',
      })
    ).toHaveAttribute('href', '/books');

    expect(
      screen.getByRole('link', {
        name: 'Author catalog',
      })
    ).toHaveAttribute('href', '/authors');

    expect(
      screen.getByRole('link', {
        name: 'Read later list',
      })
    ).toHaveAttribute('href', '/readlater');
  });
});
