export const changeView = (state, payload) => {
  if (payload.view !== state.view) {
    let meta = payload.meta;

    if (!payload.force) {
      window.history.pushState(payload.view, payload.view, payload.view);
    } else {
      meta = null;
    }

    return {
      ...state,
      view: payload.view,
      meta
    };
  }

  return state;
};

export const updateLog = (state, payload) => ({
  ...state,
  logs: [{ ...payload, dateAdded: Date.now() }, ...state.logs]
});

export const updateIngredients = (state, payload) => ({
  ...state,
  selectedIngredients: payload.clear
    ? []
    : [...state.selectedIngredients, { id: payload.id, grams: payload.grams }]
});
