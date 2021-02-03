// promise.all (resolve와 reject) 가 아닌 promise 객체가 여러개인 경우
// 배열로 만들어 인자로 넣고 Primise.all을 실행하면,
// 배열의 모든 promise 객체들이 fullfil 되었을때, then의 (콜백)함수가 실행된다.
// then의 콜백의 인자로 프로미스 객체들의 resolve인자값을 배열로 돌려준다.
// Promise.all([프로미스 객체들])

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}

Promise.all([p(1000), p(2000), p(3000)]).then( msg => {
  console.log('모두 full된 이후에 실행됩니다', msg);
})