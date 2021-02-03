// Promise.race([프로미스 객체들])

// Promise.all의 경우, 프로미스 객체 모두가 fullfil 되면 실행이 되었는데
// Promise.race의 경우, 프로미스 객체중 가장빠르게 fullfil이 되면 then이 실행된다.

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}

Promise.race([p(1000), p(2000), p(3000)]).then( msg => {
  console.log('가장 빠른 하나가 full된 이후에 실행됩니다', msg);
})