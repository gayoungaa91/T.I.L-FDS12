import React, { useState } from 'react';

const info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  }
  const onchageNickname = e => {
    setNickname(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onchageNickname}/>
    </div>
  );
};

export default info;