export const changeView = (state, payload) => {
  if (payload.view !== state.view) {
    if (!payload.force) {
      window.history.pushState(payload.view, payload.view, payload.view);
    }

    return {
      ...state,
      view: payload.view
    };
  }

  return state;
};

export const updateLog = (state, payload) => ({
  ...state,
  logs: [...state.logs, { ...payload, dateAdded: Date.now() }]
});
