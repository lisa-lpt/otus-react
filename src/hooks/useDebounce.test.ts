import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns initial value imediately', () => {
    const { result } = renderHook(() => useDebounce('Romeo', 300));

    expect(result.current).toBe('Romeo');
  });

  it('updates value after timeout', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      {
        initialProps: { value: 'Romeo' },
      }
    );

    rerender({ value: 'Macbeth' });

    //до 300 мс
    expect(result.current).toBe('Romeo');

    //после 300 мс
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe('Macbeth');
  });
});
