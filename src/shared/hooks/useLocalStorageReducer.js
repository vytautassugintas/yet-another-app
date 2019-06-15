import { useEffect, useReducer } from 'react';
import { has } from '../helpers/has';

// checks if there are any new fields in initial state
function sanitazeState(localState, initialState) {
  Object.keys(initialState).forEach(key => {
    if (!has(localState, key)) {
      Object.assign(localState, { [key]: initialState[key] });
    }
  });
}

function resetDateCounters(localState, initialState) {
  if (!localState.waterIntake.updated) {
    return;
  }

  const initialized = new Date(initialState.initialized);
  const latesWaterIntake = new Date(localState.waterIntake.updated);

  if (
    initialized.getMonth() === latesWaterIntake.getMonth() &&
    initialized.getDay() === latesWaterIntake.getDay()
  ) {
    return;
  }

  Object.assign(localState, {
    waterIntake: {
      ...initialState.waterIntake,
    },
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
    resetDateCounters(localStorageState, state);
  }, []);

  const [reducerState, dispatch] = useReducer(reducer, localStorageState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(reducerState));
  }, [reducerState]);

  return [reducerState, dispatch];
}
