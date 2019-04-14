import React, { useContext } from "react";
import { EntryButton } from "../shared";
import { changeView } from "../shared/state/actions";
import { viewLabels } from "../shared/constants";
import { AppContext } from "../App";

export default function FoodContainer() {
  const { dispatch } = useContext(AppContext);

  return (
    <div>
      <EntryButton
        label="Create Meal"
        onClick={() =>
          dispatch(changeView({ view: viewLabels.FOOD_CREATE_MEAL }))
        }
      />
    </div>
  );
}
