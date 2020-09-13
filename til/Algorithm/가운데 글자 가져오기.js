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

