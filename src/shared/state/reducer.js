import {
  changeView,
  updateLog,
  updateIngredients,
  removeIngredient,
  updateMeal,
  increaseCupsCount
} from "./updators";
import { actions } from "./actions";

export const initialState = {
  view: "LOG",
  logs: [],
  waterIntake: {
    cupsCount: 0
  },
  plan: {},
  selectedIngredients: [],
  meals: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_VIEW:
      return changeView(state, action.payload);

    case actions.UPDATE_LOG:
      return updateLog(state, action.payload);

    case actions.INCREASE_CUPS_COUNT:
      return increaseCupsCount(state);

    case actions.ADD_INGREDIENT:
      return updateIngredients(state, action.payload);

    case actions.REMOVE_INGREDIENT:
      return removeIngredient(state, action.payload);

    case actions.UPDATE_MEAL:
      return updateMeal(state, action.payload);

    default:
      throw new Error("Unexpected action");
  }
};
