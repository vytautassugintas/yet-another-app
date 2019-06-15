import React, { useContext } from 'react';
import { NavButton } from './shared';
import { AppContext } from './App';
import { viewLabels as views } from './shared/constants';
import { changeView as changeViewAction } from './shared/state/actions';

import './Nav.scss';

export function Nav() {
  const {
    dispatch,
    state: { view: currentView },
  } = useContext(AppContext);

  function changeView(view) {
    dispatch(changeViewAction({ view }));
  }

  const settings = [
    {
      view: views.LOG,
      label: 'Log',
      icon: '📖',
    },
    {
      view: views.PLAN,
      label: 'Plan',
      icon: '🏋',
    },
    {
      view: views.FOOD,
      label: 'Food',
      icon: '🍎',
    },
  ];

  return (
    <div className="Nav">
      {settings.map(({ view, label, icon }) => (
        <NavButton
          onClick={() => changeView(view)}
          isActive={currentView.includes(view)}
          label={label}
          icon={icon}
        />
      ))}
    </div>
  );
}
