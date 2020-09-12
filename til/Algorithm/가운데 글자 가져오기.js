function solution(s) {
  let str =  s.split('')
  // if(str.length % 2 === 1) {
  //     let i = 0;
  //     while( i < str.length - 1 ) {
  //         str.length % 2 ? str.shift() : str.pop()
  //     }
  //     i++
  // } else {
  //     let j = 0;
  //     while( j < 2) {
  //         str.length % 2 ? str.pop() : str.shift()
  //     }
  //     j++
  // }
  let i = 0;
  while(i < str.length - 1) {
      if(str.length % 2 !== 1) {
           str.length % 2 ? str.shift() : str.pop()
      } else {
          str.length % 2 ? str.pop() : str.shift()
      }
  }
  i++
  return str.toString() 
}

// 우선 내가 보통 어떻게 처리하는지 말로써본다
// 문자열이 홀수인지, 짝수인지 처리한다.
// 홀수라면 문자열이 하나남을때, 짝수라면 문자열이 2개남을때로 분기친다.
// 앞에 한글자, 뒤에 한글자를 뗀다.