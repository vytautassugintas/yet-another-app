import React, { useContext } from "react";
import { NavButton } from "./shared";
import { AppContext } from "./App";
import { viewLabels as views } from "./shared/constants";
import { changeView as changeViewAction } from "./shared/state/actions";

export function Nav() {
  const {
    dispatch,
    state: { view }
  } = useContext(AppContext);

  function changeView(view) {
    dispatch(changeViewAction({ view }));
  }

  return (
    <div style={{ display: "flex" }}>
      <NavButton
        isActive={view === views.LOG}
        onClick={() => changeView(views.LOG)}
        label="Log"
        icon="📖"
      />
      <NavButton
        isActive={view === views.PLAN}
        onClick={() => changeView(views.PLAN)}
        label="Plan"
        icon="🏋"
      />
      <NavButton
        isActive={view === views.FOOD}
        onClick={() => changeView(views.FOOD)}
        label="Food"
        icon="🍎"
      />
    </div>
  );
}
