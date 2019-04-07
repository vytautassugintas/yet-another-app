import React from "react";

import { Log } from "./Log/Log";
import { NavButton } from "./shared/NavButton";

export default function App() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <NavButton label="Log" icon="📖" />
        <NavButton label="Plan" icon="🏋" />
      </div>
      <Log />
    </div>
  );
}
