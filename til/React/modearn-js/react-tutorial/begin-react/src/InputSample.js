import React, {useState} from 'react';
// input에 name이라는 값을 설정하고,
// 이벤트가 발생하면 name을 참조하는것이다. 

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  })
  const {name, nickname } = inputs;
  
  const onChange = e => {
    const {name, value} = e.target
    
    setInputs({...inputs, [name]: value})
    // [name] 대괄호를 써야 한다.
    // 새로운 객체를 생성한다.
  }
  const onReset = () => {
   setInputs({
     name: '', 
     nickname: '',
    })
  }
  return (
    <div>
      <input name='name' placeholder="이름" onChange={onChange} value={name} />
      <input name='nickname' placeholder="닉네임" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 :</b>
        이름(닉네임) {name}({nickname})
      </div>
    </div>
  )
}

export default InputSample;

//  useStte는 배열을 반환하며, 첫번쨰 원소는 초기값과 두번째 원소는 변화된 상태값이다.
// set함수 안에는 업데이트가 어떻게 이루어질지 원하는 값을 넣어주면 된다.
// (바로 다음 업데이트값이 될수도 있고 함수 로직이 될수도 있다)
// html에서 보여지는 요소는 자바스크립트 기본값을 넣어주어야 한다.
// 그래야 상태가 변화되었을때도 반영된다 자연스럽게 {value}
// input에서 초기값('')으로 돌아가야 하는것처럼, 값이 변하는 상황을 브라우저 화면에서 보고싶다면
// 무조건 DOM요소에 초기값을 자바스크립트 값의 형태로 넣어주어야 한다.{value}
