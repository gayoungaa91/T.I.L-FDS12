// resolve, reject이후에 최종적으로 실행할것이 있다면, finally()를 설정하고 함수를 인자로 넣는다.
function p () {
  return new Promise((resolve, reject) => {
    // pending
    setTimeout(() => {
      // resolve('hello')
      // reject('500에러입니다')
      // 에러같은경우, 에러 객체를 보낸다 일반적으로
      reject(new Error('500에러 입니다'));
    }, 1000)
  })
}


p()
  .then((msg) => {
  console.log(msg);
})
  .catch((reason) => {
  console.log(reason);
})
.finally(() => {
  console.log('end');
})


