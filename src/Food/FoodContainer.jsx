import React, { useContext } from 'react';
import { EntryButton } from '../shared';
import { changeView } from '../shared/state/actions';
import { viewLabels } from '../shared/constants';
import { uid } from '../shared/helpers/uid';
import { AppContext } from '../App';

export default function FoodContainer() {
  const {
    dispatch,
    state: { meals },
  } = useContext(AppContext);

  let entries = [
    {
      id: uid(),
      view: viewLabels.FOOD_CREATE_MEAL,
      label: 'Create Meal',
    },
  ];

  if (meals.length) {
    entries = [
      {
        id: uid(),
        view: viewLabels.FOOD_MEALS,
        label: `Meals ${meals.length ? `(${meals.length})` : ''}`,
      },
      ...entries,
    ];
  }

  return entries.map(({ id, view, label }) => (
    <EntryButton
      key={id}
      onClick={() => dispatch(changeView({ view }))}
      label={label}
    />
  ));
}
