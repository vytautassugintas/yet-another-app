import React from "react";

import "./WeightDashboard.scss";

export const WeightDashboard = ({ logs }) => {
  if (!logs.length) {
    return "no logs yet";
  }

  const weightLog = logs.map(l => parseFloat(l && l.entry));
  const maxWeight = Math.max(...weightLog);
  const minWeight = Math.max(...weightLog);
  const ratio = maxWeight - minWeight + 1;

  const weightPoints = logs.map((l, i) => {
    const weight = parseFloat(l && l.entry);
    const amplification = (maxWeight - weight) * (20 / ratio);
    return {
      entry: (weight / maxWeight) * 100 - amplification,
      weight: weight,
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
      <div className="WeightDashboard__container">
        <div className="WeightDashboard__x-axis__container">
          <span className="WeightDashboard__x-axis">
            {weightLogs.map(p => (
              <span
                key={p.key}
                style={{ height: `${(p && p.entry) || 0}%` }}
                className="WeightDashboard__point"
              >
                {p.entry && !p.filler ? (
                  <span>
                    <i className="material-icons md10">fiber_manual_record</i>
                    <div className="WeightDashboard__point__weight">
                      {p.weight}
                    </div>
                  </span>
                ) : (
                  <span> </span>
                )}
                <span>{p.day}</span>
              </span>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};
