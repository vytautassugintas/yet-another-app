import React, { useContext, useEffect } from "react";
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

import { viewLabels, actions } from "./shared/constants";

const viewEntries = {
  [viewLabels.LOG]: <LazyLogContainer />,
  [viewLabels.PLAN]: <LazyPlanContainer />,
  [viewLabels.FOOD]: <LazyFoodContainer />
};

const initialView = viewLabels.LOG;

export function ViewManager() {
  const {
    state: { view = initialView },
    dispatch
  } = useContext(AppContext);

  function changeView(view) {
    dispatch({ type: actions.CHANGE_VIEW, view, force: true });
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
