import { changeView, updateLog, updateIngredients } from "./updators";
import { actions } from "./actions";

export const initialState = {
  view: "LOG",
  logs: [],
  plan: {},
  selectedIngredients: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_VIEW:
      return changeView(state, action.payload);

    case actions.UPDATE_LOG:
      return updateLog(state, action.payload);

    case actions.ADD_INGREDIENT:
      return updateIngredients(state, action.payload);

    default:
      throw new Error("Unexpected action");
  }
};
