import React, { useContext } from 'react';

import { AppContext } from '../App';
import { EntryButton } from '../shared';
import { viewLabels } from '../shared/constants';
import { changeView } from '../shared/state/actions';
import { uid } from '../shared/helpers/uid';

export default function PlanContainer() {
  const { dispatch } = useContext(AppContext);

  const entries = [
    {
      id: uid(),
      view: viewLabels.WORKOUT,
      label: 'Current Workout',
    },
    {
      id: uid(),
      view: viewLabels.WORKOUT_CREATE,
      label: 'Create Workout',
    },
  ];

  return entries.map(({ id, view, label }) => (
    <EntryButton
      key={id}
      onClick={() => dispatch(changeView({ view }))}
      label={label}
    />
  ));
}
