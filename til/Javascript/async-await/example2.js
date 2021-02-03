
//  Promise 객체를 리턴하는 함수르 await 호출하는 방법
// resolve 됐을때 ms가 리턴값으로 온다.

// 따라서 await를 붙이면 비동기처리를 끝내고서야 다음줄이 실행된다.
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms)
  })
}

// async가 들어있는 함수를 실행하면, 그 로직이 다 끝날때까지 종료되지 않고
// await가 걸려있으면 비동기처리가 끝날때까지 기다렸다가
//  정상적으로 resolve되면, resolve 인자 (ms)를 넘겨서 계속 진행한다.

// async await의 좋은점은 비동기처리 임에도 불구하고 
// 코드를 순차적으로 표현할 수 있다는 점이다.

(async function main() {
  const ms = await p(1000);
  console.log(`${ms} ms후에 실행된다`);
})();

