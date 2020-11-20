import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
 
  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
    // 업데이트 하는데신 업데이트를 어떻게 할것인지 로직을 넣어줄수도 있다.
    // 최적화하는 단계에서 함수형 업데이트란것이 필요하다.
  }
  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;