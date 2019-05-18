import React, { useContext } from "react";
import { AppContext } from "../App";
import { changeView } from "../shared/state/actions";
import { viewLabels, RECOMMENDED_CUPS } from "../shared/constants";
import { EntryButton } from "../shared";

import "./LogContainer.scss";

export default function LogContainer() {
  const {
    state: {
      logs,
      waterIntake: { cupsCount }
    },
    dispatch
  } = useContext(AppContext);

  function changeLogView(logView) {
    dispatch(changeView({ view: logView }));
  }

  const lastWeightLog = logs.length && logs[0];

  return (
    <>
      <EntryButton
        label="Weight"
        subLabel={
          lastWeightLog
            ? `${lastWeightLog.entry} kg | ${new Date(
                lastWeightLog.dateAdded
              ).toLocaleDateString()}`
            : ""
        }
        onClick={() => changeLogView(viewLabels.LOG_WEIGHT)}
      />
      <EntryButton
        label="Water Intake"
        subLabel={`${RECOMMENDED_CUPS - cupsCount} cups left`}
        onClick={() => changeLogView(viewLabels.LOG_WATER)}
      />
    </>
  );
}
