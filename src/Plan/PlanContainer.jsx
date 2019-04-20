import React, { useContext } from "react";

import { AppContext } from "../App";
import { EntryButton } from "../shared";
import { viewLabels } from "../shared/constants";
import { changeView } from "../shared/state/actions";

export default function PlanContainer() {
  const { dispatch } = useContext(AppContext);

  return (
    <>
      <EntryButton
        onClick={() => dispatch(changeView({ view: viewLabels.WORKOUT }))}
        label="Current Workout"
      />
      <EntryButton
        onClick={() =>
          dispatch(changeView({ view: viewLabels.WORKOUT_CREATE }))
        }
        label="Create Workout"
      />
    </>
  );
}
