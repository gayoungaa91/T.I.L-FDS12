// 생성자를 통해서 프로미스 객체를 만들 수 있다.
// executor : (resolve, reject) => {....}

// 생성자를 통해 객체를 만드는순간 pending상태가 된다.
const p = new Promise((resolve, reject) => {
  // pending
  setTimeout(() => {
    resolve();
  }, 1000)
})
// resolve로 넘어가면 then이후가 실행됨
p.then(() => {
  console.log('1000ms이후에 실행됨');
})