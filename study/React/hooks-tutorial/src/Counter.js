import React, {useState} from 'react';

const Counter = (2) => {
  const [value, setValue] = useState(10);
  return (
    <div>
      <p>현재 카운터의 값은 {value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value -1)}>-</button>
    </div>
  );
};

export default Counter;