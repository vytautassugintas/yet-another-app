import { useEffect, useReducer } from "react";

function has(object, key) {
  return object ? hasOwnProperty.call(object, key) : false;
}

function sanitazeState(localState, initialState) {
  Object.keys(initialState).forEach(key => {
    if (!has(localState, key)) {
      Object.assign(localState, { [key]: initialState[key] });
    }
  });
}

export function useLocalStorageReducer(key, reducer, state) {
  let localStorageState;

  if (key) {
    localStorageState =
      (localStorage[key] && JSON.parse(localStorage[key])) || state;
  } else {
    localStorageState = state;
  }

  useEffect(() => {
    sanitazeState(localStorageState, state);
  }, []);

  const [reducerState, dispatch] = useReducer(reducer, localStorageState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(reducerState));
  }, [reducerState]);

  return [reducerState, dispatch];
}