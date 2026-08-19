import { useEffect, useState } from 'react';

export const useDebounce = (value: string, timeout = 300) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);

    return () => clearTimeout(handler);
  }, [value, timeout]);

  return debounceValue;
};
