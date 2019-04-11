import { changeView, updateLog } from "./updators";
import { actions } from "./actions";

export const initialState = {
  view: "LOG",
  logs: [],
  plan: {}
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_VIEW:
      return changeView(state, action.payload);

    case actions.UPDATE_LOG:
      return updateLog(state, action.payload);

    default:
      throw new Error("Unexpected action");
  }
};
