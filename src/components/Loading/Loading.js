import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className="loading" role="status" aria-label="Loading">
      <div className="loading__spinner" />
    </div>
  );
}

export default Loading;
