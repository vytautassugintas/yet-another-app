import React, { useContext } from "react";
import { AppContext } from "./App";
import { viewLabels } from "./constants";

import { Log as LogContainer } from "./Log/Log";

const PlanContainer = () => <div>Plan</div>;

const FoodContainer = () => <div>Food</div>;

const viewComponents = {
  [viewLabels.LOG]: <LogContainer />,
  [viewLabels.PLAN]: <PlanContainer />,
  [viewLabels.FOOD]: <FoodContainer />
};

export function ViewManager() {
  const {
    state: { view }
  } = useContext(AppContext);

  return viewComponents[view];
}
