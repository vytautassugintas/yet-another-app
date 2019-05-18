import React, { useContext } from "react";
import { AppContext } from "../../App";
import { RECOMMENDED_CUPS } from "../../shared/constants";
import { increaseCupsCount } from "../../shared/state/actions";
import { RadialProgress } from "../../shared";

export default function WaterLog() {
  const {
    state: {
      waterIntake: { cupsCount }
    },
    dispatch
  } = useContext(AppContext);

  const shouldDrinkMore = cupsCount < RECOMMENDED_CUPS;

  return shouldDrinkMore ? (
    <>
      <RadialProgress
        radius={80}
        stroke={10}
        percent={(cupsCount / RECOMMENDED_CUPS) * 100}
      />
      <div>
        Water Drinked {cupsCount} / {RECOMMENDED_CUPS}
      </div>
      <button onClick={() => dispatch(increaseCupsCount())}>Drink Water</button>
    </>
  ) : (
    "Good Job! You drank enough today"
  );
}
