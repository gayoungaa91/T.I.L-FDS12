import React, {useState} from 'react';

function Counter() {
  const [value, setvalue] = useState(0);

  // useStatue는 배열을 반환하게 되는데,
  // 첫번째 원소는 현재상태, 두번쨰 원소는 바뀐상태
  // setvalue에 새로운함수를 넣어서 호출해주면 값이 바뀐다.

  const onIncrease = e => {
    setvalue(prevnum => prevnum +1);
    // 로직이 있는 업데이트 함수를 넣어줄수도 있다.
    // 최적화 하는 과정에서 함수형 업데이트가 필요하다.

  }
  const onDecrease = e => {
    setvalue(prevnum => prevnum -1)
  }
  
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}

export default Counter;