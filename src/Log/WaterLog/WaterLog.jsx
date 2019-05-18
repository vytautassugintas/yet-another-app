import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { RECOMMENDED_CUPS } from "../../shared/constants";
import { increaseCupsCount } from "../../shared/state/actions";

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
      <div>
        Water Drinked {cupsCount} / {RECOMMENDED_CUPS}
      </div>
      <button onClick={() => dispatch(increaseCupsCount())}>Drink Water</button>
    </>
  ) : (
    "Good Job! You drank enough today"
  );
}
