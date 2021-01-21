import React from 'react';
import { useReducer } from "react";

function reducer (state, action) {
  switch(action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('error');
  }
}

function Counter3 () {
  const [num, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({
      type: 'INCREASE',
    })
  }

  const onDecrease = () => {
    dispatch({
      type: 'DECREASE',
    })
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter3;