import React from 'react';

import './WeightLogList.scss';

export const WeightLogList = ({ logs }) => {
  if (!logs.length) {
    return 'No logs yet';
  }

  return (
    <div>
      {logs.map(l => (
        <div className="WeightLogList__item" key={l.id}>
          {l.entry}
          {' kg '}
          <span className="WeightLogList__item__display-date">
            {new Date(l.dateAdded).toLocaleTimeString()}
          </span>
        </div>
      ))}
    </div>
  );
};
