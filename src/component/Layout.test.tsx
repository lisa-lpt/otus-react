import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../test';
import { Layout } from './Layout';
import { screen } from '@testing-library/dom';

describe('Layout', () => {
  it('render layout elements', () => {
    renderWithProviders(<Layout />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
  it('loading', () => {});
});
