import React, { useContext } from "react";
import { EntryButton } from "../shared";
import { changeView } from "../shared/state/actions";
import { viewLabels } from "../shared/constants";
import { generateAlmostUniqueId } from "../shared/helpers/generateUniqueID";
import { AppContext } from "../App";

export default function FoodContainer() {
  const {
    dispatch,
    state: { meals }
  } = useContext(AppContext);

  const entries = [
    {
      id: generateAlmostUniqueId(),
      view: viewLabels.FOOD_MEALS,
      label: `Meals ${meals.length ? `(${meals.length})` : ""}`
    },
    {
      id: generateAlmostUniqueId(),
      view: viewLabels.FOOD_CREATE_MEAL,
      label: "Create Meal"
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
