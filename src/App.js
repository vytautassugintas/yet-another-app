import React, { useState } from "react";

import { Log } from "./Log/Log";
import { NavButton } from "./shared/NavButton";

const views = {
  LOG: "LOG",
  PLAN: "PLAN",
  FOOD: "FOOD"
};

export default function App() {
  const [view, changeView] = useState("LOG");

  function getView() {
    switch (view) {
      case views.LOG:
        return <Log />;
      case views.PLAN:
        return <div>Plan</div>;
      case views.FOOD:
        return <div>Food</div>;
      default:
        return <Log />;
    }
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <NavButton
          isActive={view == views.LOG}
          onClick={() => changeView(views.LOG)}
          label="Log"
          icon="📖"
        />
        <NavButton
          isActive={view == views.PLAN}
          onClick={() => changeView(views.PLAN)}
          label="Plan"
          icon="🏋"
        />
        <NavButton
          isActive={view == views.FOOD}
          onClick={() => changeView(views.FOOD)}
          label="Food"
          icon="🍎"
        />
      </div>
      {getView()}
    </div>
  );
}
