import React from "react";
import { useLocalStorageReducer } from "./shared/hooks/useLocalStorageReducer";
import { Nav } from "./Nav";
import { ViewManager } from "./ViewManager";
import { FloatingActionButton } from "./shared";
import { APP_STATE_STORAGE_KEY } from "./shared/constants";
import { reducer, initialState } from "./shared/state/reducer";
export const AppContext = React.createContext();

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
      {/* <FloatingActionButton /> */}
    </AppContext.Provider>
  );
}
