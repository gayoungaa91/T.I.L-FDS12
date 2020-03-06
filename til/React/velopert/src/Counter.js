import React, {useState} from 'react';

const Counter = () => {
  const [number, setNumber] = useState(10);

  const onIncrase = () => {
    setNumber(prevN => prevN + 1)
  }
  const deCrease = () => {
    setNumber(prevN => prevN - 1)
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