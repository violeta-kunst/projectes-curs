
import React from 'react';
import '../App.css';

const Panel = ({ message }) => {
  return (
    <div className="panel">
      <h2>{message}</h2>
    </div>
  );
};

export default Panel;
