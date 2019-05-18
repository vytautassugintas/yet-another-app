import React, { useContext } from "react";

import { AppContext } from "../App";
import { EntryButton } from "../shared";
import { viewLabels } from "../shared/constants";
import { changeView } from "../shared/state/actions";
import { generateAlmostUniqueId } from "../shared/helpers/generateUniqueID";

export default function PlanContainer() {
  const { dispatch } = useContext(AppContext);

  const entries = [
    {
      id: generateAlmostUniqueId(),
      view: viewLabels.WORKOUT,
      label: "Current Workout"
    },
    {
      id: generateAlmostUniqueId(),
      view: viewLabels.WORKOUT_CREATE,
      label: "Create Workout"
    }
  ];

  return entries.map(({ id, view, label }) => (
    <EntryButton
      key={id}
      onClick={() => dispatch(changeView({ view }))}
      label={label}
    />
  ));
}
