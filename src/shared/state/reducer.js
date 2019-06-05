import {
  changeView,
  updateLog,
  updateIngredients,
  removeIngredient,
  updateMeal,
  increaseCupsCount,
} from './updators';
import { actions } from './actions';
import { createReducer } from '../helpers/createReducer';

export const initialState = {
  view: 'LOG',
  logs: [],
  waterIntake: {
    cupsCount: 0,
  },
  plan: {},
  selectedIngredients: [],
  meals: [],
};

export const reducer = createReducer(initialState, {
  [actions.CHANGE_VIEW]: changeView,
  [actions.UPDATE_LOG]: updateLog,
  [actions.INCREASE_CUPS_COUNT]: increaseCupsCount,
  [actions.ADD_INGREDIENT]: updateIngredients,
  [actions.REMOVE_INGREDIENT]: removeIngredient,
  [actions.UPDATE_MEAL]: updateMeal,
});
