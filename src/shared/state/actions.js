export const actions = {
  CHANGE_VIEW: "changeView",
  UPDATE_LOG: "updateLog"
};

export const changeView = ({ view, force = false }) => ({
  type: actions.CHANGE_VIEW,
  payload: {
    view,
    force
  }
});

export const updateLog = entry => ({
  type: actions.UPDATE_LOG,
  payload: entry
});
