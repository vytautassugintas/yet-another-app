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

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

export const reducer = createReducer(initialState, {
  [actions.CHANGE_VIEW]: changeView,
  [actions.UPDATE_LOG]: updateLog,
  [actions.INCREASE_CUPS_COUNT]: increaseCupsCount,
  [actions.ADD_INGREDIENT]: updateIngredients,
  [actions.REMOVE_INGREDIENT]: removeIngredient,
  [actions.UPDATE_MEAL]: updateMeal
});
