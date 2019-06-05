import React from 'react';

import './EntryButton.scss';

export function EntryButton({
  onClick, label, subLabel, usePlus,
}) {
  return (
    <div onClick={onClick} className="EntryButton">
      <div>
        <div className="EntryButton__label">{label}</div>
        {subLabel && <div>{subLabel}</div>}
      </div>
      <div>
        {usePlus ? (
          <i className="material-icons">add</i>
        ) : (
          <i className="material-icons">keyboard_arrow_right</i>
        )}
      </div>
    </div>
  );
}
