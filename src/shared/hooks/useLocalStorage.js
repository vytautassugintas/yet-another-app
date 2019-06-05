import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    const localStorageValue = localStorage.getItem(key);
    if (typeof localStorageValue !== 'string') {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
    return JSON.parse(localStorageValue || 'null');
  });

  useEffect(() => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  });

  return [state, setState];
}

export default useLocalStorage;
