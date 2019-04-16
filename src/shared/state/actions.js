export const actions = {
  CHANGE_VIEW: "changeView",
  UPDATE_LOG: "updateLog",
  ADD_INGREDIENT: "addIngredient",
  REMOVE_INGREDIENT: "removeIngredient",
  UPDATE_MEAL: "updateMeal"
};

export const changeView = ({ view, force = false, meta }) => ({
  type: actions.CHANGE_VIEW,
  payload: {
    view,
    force,
    meta
  }
});

export const updateLog = entry => ({
  type: actions.UPDATE_LOG,
  payload: {
    ...entry
  }
});

export const addIngredient = ({ id, grams, clear = false }) => ({
  type: actions.ADD_INGREDIENT,
  payload: {
    id,
    grams,
    clear
  }
});

export const removeIngredient = ({ id }) => ({
  type: actions.REMOVE_INGREDIENT,
  payload: {
    id
  }
});

export const updateMeal = ({ title, updateType, id }) => ({
  type: actions.UPDATE_MEAL,
  payload: {
    title,
    updateType,
    id
  }
});
