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
    <div
      style={{
        display: "flex",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #ecf0f1",
        paddingTop: "6px"
      }}
    >
      <NavButton
        isActive={view.includes(views.LOG)}
        onClick={() => changeView(views.LOG)}
        label="Log"
        icon="📖"
      />
      <NavButton
        isActive={view.includes(views.PLAN)}
        onClick={() => changeView(views.PLAN)}
        label="Plan"
        icon="🏋"
      />
      <NavButton
        isActive={view.includes(views.FOOD)}
        onClick={() => changeView(views.FOOD)}
        label="Food"
        icon="🍎"
      />
    </div>
  );
}
