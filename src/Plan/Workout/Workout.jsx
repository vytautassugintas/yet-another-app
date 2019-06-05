import React from 'react';
import { currentPlan } from '../../shared/workout';

import './Workout.scss';

export default function Workout() {
  return currentPlan.map(plan => (
    <div key={plan.title} className="Workout__container">
      <p className="Workout__title">{plan.title}</p>
      {plan.groups.map(group => (
        <div key={group.id}>
          <p className="Workout__group__title">{group.title}</p>
          {group.excercises.map(excercise => (
            <p key={excercise.id} className="Workout__group__excercise-label">
              {excercise.title}
            </p>
          ))}
        </div>
      ))}
    </div>
  ));
}
