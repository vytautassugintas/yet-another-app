import React from "react";
import { useLocalStorageReducer } from "./shared/hooks/useLocalStorageReducer";
import { Nav } from "./Nav";
import { ViewManager } from "./ViewManager";
import { APP_STATE_STORAGE_KEY, actions } from "./shared/constants";

export const AppContext = React.createContext();

function handleViewChange(state, action) {
  if (action.view !== state.view) {
    if (!action.force) {
      window.history.pushState(action.view, action.view, action.view);
    }

    return {
      ...state,
      view: action.view
    };
  }
  return state;
}

const initialState = {
  view: "LOG",
  logs: [],
  plan: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_VIEW:
      return handleViewChange(state, action);

    default:
      throw new Error("Unexpected action");
  }
};

export default function App() {
  const [state, dispatch] = useLocalStorageReducer(
    APP_STATE_STORAGE_KEY,
    reducer,
    initialState
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Nav />
      <ViewManager />
    </AppContext.Provider>
  );
}
