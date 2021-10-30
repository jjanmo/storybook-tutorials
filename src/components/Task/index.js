import React from 'react';

export default ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly />
    </div>
  );
};
