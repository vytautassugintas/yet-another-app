import React, { useContext } from "react";
import { AppContext } from "../App";
import { changeView } from "../shared/state/actions";
import { viewLabels } from "../shared/constants";

import "./LogContainer.scss";

export default function LogContainer() {
  const {
    state: { logs },
    dispatch
  } = useContext(AppContext);

  function changeLogView(logView) {
    dispatch(changeView({ view: logView }));
  }

  const lastWeightLog = logs.length && logs[0];

  return (
    <div>
      <div onClick={() => changeLogView(viewLabels.LOG_WEIGHT)} className="cta">
        <div>
          <div className="cta__weight-label">Weight</div>
          {!!lastWeightLog && (
            <div>
              {lastWeightLog.entry} kg |{" "}
              {new Date(lastWeightLog.dateAdded).toLocaleDateString()}
            </div>
          )}
        </div>
        <div>
          <i className="material-icons">keyboard_arrow_right</i>
        </div>
      </div>
    </div>
  );
}
