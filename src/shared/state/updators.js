import { uid } from '../helpers/uid';

export const changeView = (state, { payload }) => {
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
      meta,
    };
  }

  return state;
};

export const updateLog = (state, { payload }) => ({
  ...state,
  logs: [{ ...payload, dateAdded: Date.now() }, ...state.logs],
});

export const increaseCupsCount = state => ({
  ...state,
  waterIntake: {
    cupsCount: state.waterIntake.cupsCount + 1,
    updated: new Date(),
  },
});

export const updateIngredients = (state, { payload }) => ({
  ...state,
  selectedIngredients: payload.clear
    ? []
    : [
        ...state.selectedIngredients,
        { id: payload.id, grams: parseInt(payload.grams) },
      ],
});

export const removeIngredient = (state, { payload }) => ({
  ...state,
  selectedIngredients: state.selectedIngredients.filter(
    i => i.id !== payload.id
  ),
});

export const updateMeal = (state, { payload }) => {
  switch (payload.updateType) {
    case 'create':
      return {
        ...state,
        meals: [
          ...state.meals,
          {
            id: uid(),
            title: payload.title,
            ingredients: state.selectedIngredients,
          },
        ],
        selectedIngredients: [],
      };
    default:
      return state;
  }
};
