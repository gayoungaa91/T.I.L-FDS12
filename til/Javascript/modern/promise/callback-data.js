// executor의 resolve함수를 실행할 때 인자를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있다.
// resolve('hello') 
// then((msg) => {...})


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

// reject가 실행되면 then이후에 "catch"에 콜백함수를 넣어 처리한다.
p()
  .then((msg) => {
  console.log(msg);
})
  .catch((reason) => {
  console.log(reason);
});

// 보통 받아온 데이터를 then으로 데이터를 넘겨주고, 그걸 활용하게 된다.
