import React, { useReducer } from "react";
import { Nav } from "./Nav";
import { ViewManager } from "./ViewManager";
import { actions } from "./shared/constants";

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
  view: "LOG"
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Nav />
      <ViewManager />
    </AppContext.Provider>
  );
}
