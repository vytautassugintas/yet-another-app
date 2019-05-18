import React, { useContext } from "react";
import { AppContext } from "../../App";
import { RECOMMENDED_CUPS } from "../../shared/constants";
import { increaseCupsCount } from "../../shared/state/actions";
import { RadialProgress } from "../../shared";

import "./WaterLog.scss";

export default function WaterLog() {
  const {
    state: {
      waterIntake: { cupsCount }
    },
    dispatch
  } = useContext(AppContext);

  const shouldDrinkMore = cupsCount < RECOMMENDED_CUPS;

  return (
    <div className="WaterLog">
      <RadialProgress
        radius={120}
        stroke={12}
        percent={(cupsCount / RECOMMENDED_CUPS) * 100}
        label={`Water Drinked ${cupsCount} / ${RECOMMENDED_CUPS}`}
      />

      {shouldDrinkMore ? (
        <>
          <div />
          <button onClick={() => dispatch(increaseCupsCount())}>
            Drink Water
          </button>
        </>
      ) : (
        "Good Job! You drank enough today"
      )}
    </div>
  );
}
