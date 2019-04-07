import React, { useReducer } from "react";
import { Nav } from "./Nav";
import { ViewManager } from "./ViewManager";
import { actions } from "./constants";

export const AppContext = React.createContext();

const initialState = {
  view: "LOG"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_VIEW:
      return { ...state, view: action.view };

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
