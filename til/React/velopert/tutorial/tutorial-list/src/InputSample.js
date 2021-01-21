import React, {useState, useRef} from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  })
  const nameInput = useRef();
  const {name, nickname} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    })
    nameInput.current.focus()
  }


  return (
    <>
     <input placeholder="이름" name="name" value="zz" onChange={onChange} value={name} ref={nameInput}/>
     <input placeholder="닉네임" name="nickname" onChange={onChange} value={nickname}/>
     <button onClick={onReset}>초기화</button>
     <div>
      <strong>값:{name}({nickname})</strong>
     </div>
    </>
  )
}

export default InputSample;