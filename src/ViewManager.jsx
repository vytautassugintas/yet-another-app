import React, { useContext } from "react";
import { AppContext } from "./App";

/* eslint-disable import/first */

const LazyLogContainer = React.lazy(() =>
  import(/* webpackChunkName: "log-container" */ "./Log/LogContainer")
);
const LazyPlanContainer = React.lazy(() =>
  import(/* webpackChunkName: "plan-container" */ "./Plan/PlanContainer")
);
const LazyFoodContainer = React.lazy(() =>
  import(/* webpackChunkName: "food-container" */ "./Food/FoodContainer")
);

import { viewLabels } from "./constants";

const viewEntries = {
  [viewLabels.LOG]: <LazyLogContainer />,
  [viewLabels.PLAN]: <LazyPlanContainer />,
  [viewLabels.FOOD]: <LazyFoodContainer />
};

export function ViewManager() {
  const {
    state: { view }
  } = useContext(AppContext);

  return <React.Suspense fallback="">{viewEntries[view]}</React.Suspense>;
}
