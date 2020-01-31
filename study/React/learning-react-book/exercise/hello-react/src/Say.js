import React, {useState} from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('할룽');
  const onClickLeave = () => setMessage('빠염');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{color}}>{message}</h1>
      <button style={{color: 'red'}} onClick={() => setColor('red')}>뤠드</button>
      <button style={{color: 'yellow'}} onClick={() => setColor('yellow')}>옐로</button>
      <button style={{color: 'powderblue'}} onClick={() => setColor('red')}>블루</button>
    </div>
  );
};

export default Say;