import React, {useState} from 'react';

function InputSample () {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  }
  const onReset = () => {
    setValue('');
  }
  return (
    <div>
      <input onChange={onChange} value={value}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {value}
      </div>
    </div>
  )
}

export default InputSample;