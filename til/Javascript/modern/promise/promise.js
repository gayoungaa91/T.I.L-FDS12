// then을 설정하는 시점을 정확히하고, 
// 함수의 실행과 동시에 프로미스 객체를 만들면서 pending(대기)이 시작되고,
// 프로미스 객체를 생성하면서 리턴하는 함수 p를 만들어 실행고 동시에 then을 설정한다.

function p () {
  return new Promise((resolve, reject) => {
    // pending
    setTimeout(() => {
      resolve();
    }, 1000)
  })
}

// resolve로 넘어가면 then이후가 실행됨
p().then(() => {
  console.log('1000ms 이후에 실행됩니다.');
})