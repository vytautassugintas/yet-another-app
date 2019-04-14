import React, { useContext } from "react";
import { AppContext } from "../../App";
import { WeightLogList } from "./WeightLogList";
import { WeightLogInputForm } from "./WeightLogInputForm";
import { WeightDashboard } from "./WeightDashboard";

export default function WeightLog() {
  const {
    state: { logs }
  } = useContext(AppContext);

  return (
    <>
      <WeightDashboard logs={logs} />
      <WeightLogInputForm logs={logs} />
      <WeightLogList logs={logs} />
    </>
  );
}
