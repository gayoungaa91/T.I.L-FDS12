import React from 'react';

const Hello = ({name, color}) => {
  return (
    <div>
      <h1>HELLO</h1>
      <h3 style={{color}}>{name}</h3>
    </div>
  );
};

export default Hello;