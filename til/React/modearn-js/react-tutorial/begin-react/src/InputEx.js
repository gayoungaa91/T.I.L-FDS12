import React, {useState} from 'react';

function InputEx() {
  const [inputs, seteInputs] = useState({
    name: '',
    nickname: '',
  })
  const {name, nickname} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    seteInputs({...inputs,[name]: value})
  }
  const onReset = () => {
    seteInputs({
      name: '',
      nickname: '',
    })
  }

  return (
    <div>
      <input name='name' onChange={onChange} value={name}></input>
      <input name='nickname' onChange={onChange} value={nickname}></input>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        이름(닉네임) {name}({nickname})
      </div>
    </div>
  )
}

export default InputEx;