import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";
import { viewLabels } from "./shared/constants";
import { changeView as changeViewAction } from "./shared/state/actions";

/* eslint-disable import/first */

const LazyLogContainer = React.lazy(() =>
  import(/* webpackChunkName: "log-container" */ "./Log/LogContainer")
);

const LazyWeightLog = React.lazy(() =>
  import(/* webpackChunkName: "weight-log-container" */ "./Log/WeightLog/WeightLog")
);

const LazyPlanContainer = React.lazy(() =>
  import(/* webpackChunkName: "plan-container" */ "./Plan/PlanContainer")
);
const LazyFoodContainer = React.lazy(() =>
  import(/* webpackChunkName: "food-container" */ "./Food/FoodContainer")
);

const initialView = viewLabels.LOG;

const viewEntries = {
  [viewLabels.LOG]: <LazyLogContainer />,
  [viewLabels.LOG_WEIGHT]: <LazyWeightLog />,
  [viewLabels.PLAN]: <LazyPlanContainer />,
  [viewLabels.FOOD]: <LazyFoodContainer />
};

export function ViewManager() {
  const {
    state: { view = initialView },
    dispatch
  } = useContext(AppContext);

  function changeView(view) {
    dispatch(changeViewAction({ view, force: true }));
  }

  useEffect(function handleViewHistoryChange() {
    const popStateListener = window.addEventListener("popstate", () => {
      const { state } = window.history;
      changeView(state || initialView);
    });

    return window.removeEventListener("popstate", popStateListener);
  }, []);

  return <React.Suspense fallback="">{viewEntries[view]}</React.Suspense>;
}