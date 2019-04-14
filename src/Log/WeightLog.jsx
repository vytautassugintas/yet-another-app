import React, { useState, useContext } from "react";
import { Input, Button } from "../shared";
import { AppContext } from "../App";
import { updateLog } from "../shared/state/actions";
import { generateAlmostUniqueId } from "../shared/helpers/generateUniqueID";

import "./WeightLog.scss";

function isLogAlreadyAddeToday(latestLogTimestamp = 0) {
  return new Date(latestLogTimestamp).getDate() === new Date().getDate();
}

const WeightLogList = ({ logs }) => {
  if (!logs.length) {
    return "No logs yet";
  }

  return (
    <div>
      {logs.map(l => (
        <div className="log" key={l.id}>
          {l.entry}
          {" kg "}
          <span className="log__display-date">
            {new Date(l.dateAdded).toLocaleTimeString()}
          </span>
        </div>
      ))}
    </div>
  );
};

const WeightLogInputForm = ({ logs }) => {
  const [inputValue, updateInputValue] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useContext(AppContext);

  const latestLog = (logs.length && logs[0]) || null;

  function submit(e) {
    e.preventDefault();
    if (isLogAlreadyAddeToday(latestLog && latestLog.dateAdded)) {
      updateInputValue("");
      setError("Can add one weight log per day");
    } else {
      dispatch(updateLog({ id: generateAlmostUniqueId(), entry: inputValue }));
      updateInputValue("");
    }
  }

  return (
    <form onSubmit={submit}>
      <Input
        label="Entry"
        value={inputValue}
        onChange={e => updateInputValue(e.target.value)}
        rightLabel="kg"
        error={error}
      />
      <Button type="submit" label="+ Add" />
    </form>
  );
};

function isWeightEqual(weightLog) {
  return Math.min(...weightLog) === Math.max(...weightLog);
}

const WeightDashboard = ({ logs }) => {
  if (!logs.length) {
    return "no logs yet";
  }

  const weightLog = logs.map(l => parseInt(l && l.entry));

  const maxWeight = Math.max(...weightLog);
  const minWeight = isWeightEqual(weightLog)
    ? Math.max(...weightLog) - 2
    : Math.min(...weightLog);

  const weightPoints = logs.map((l, i) => {
    return {
      entry: (parseInt(l && l.entry) / maxWeight) * 100,
      key: i,
      day: new Date(l.dateAdded).getDate()
    };
  });

  function getRemainingDaysInMonth(timeStamp) {
    const date = new Date(timeStamp);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return new Date(year, month, 0).getDate() - date.getDate();
  }

  function addRemainingDays() {
    const latestWeightLog = logs[0];
    const date = new Date(latestWeightLog.dateAdded).getDate();
    const remainingDays = getRemainingDaysInMonth(latestWeightLog.dateAdded);

    return Array.from(new Array(remainingDays), (d, index) => ({
      entry: 100,
      key: remainingDays + index,
      day: date + index + 1,
      filler: true
    }));
  }

  const weightLogs = [...weightPoints.reverse(), ...addRemainingDays()];

  return (
    <>
      <div className="log__dashboard">
        <span className="log__dashboard__y-axis">
          <span>{maxWeight}</span>
          <span>{minWeight}</span>
        </span>
        <span className="log__dashboard__x-axis">
          {weightLogs.map(p => (
            <span
              key={p.key}
              style={{ height: `${(p && p.entry) || 0}%` }}
              className="log__dashboard__x-axis__point"
            >
              {p.entry && !p.filler ? (
                <i className="material-icons md10">fiber_manual_record</i>
              ) : (
                <span> </span>
              )}
              <span>{p.day}</span>
            </span>
          ))}
        </span>
      </div>
    </>
  );
};

export default function WeightLog() {
  const {
    state: { logs }
  } = useContext(AppContext);
  return (
    <>
      <WeightDashboard logs={logs} />
      {!isLogAlreadyAddeToday(logs.length && logs[0].dateAdded) && (
        <WeightLogInputForm logs={logs} />
      )}
      {logs.length && <WeightLogList logs={logs} />}
    </>
  );
}
