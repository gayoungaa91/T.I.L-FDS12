import React, {useReducer} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCERMENT': 
      return state +1;
    case 'DECREMENT': 
      return state -1;
    default: 
      throw new Error('unhandled action')
  }
}

const Counter = () => {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrase = () => {
    dispatch({
      type: 'INCERMENT'
    })
  }
  const deCrease = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }



  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrase}>+</button>
      <button onClick={deCrease}>-</button>
    </div>
  );
};

export default Counter;