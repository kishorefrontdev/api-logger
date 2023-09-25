import React from 'react';
import RenderApi from '../RenderApi';

function ViewLogs() {
  return (
    <div
      style={{
        width: '60%',
        height: '100vh',
        padding: 0,
        margin: 0,
        overflow: 'scroll',
      }}
    >
      <RenderApi />
      <button title="==>" value={'==>'}>
        {' '}
      </button>
    </div>
  );
}

export default ViewLogs;
