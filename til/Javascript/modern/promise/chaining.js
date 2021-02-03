// than 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현할 수 있다.
// 아래로 순차적으로 떨어져야 가독성이 좋지만, 콜백헬의 경우 함수안으로 게속 들어가야 하기 때문에 코드를 보기 쉽지 않다.
// than에 함수를 넣는 여러가지 방법이 있다.

function p() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
}

// p를 호출하면 pending상태가 된다.
// 다시 새로운 프로미스 객체를 만들어서 리턴하게 된다.
p()
  .then(() => {
    return p();
  })
  .then(() => p())
  .then(p)
  .then(() => {
    console.log('4000ms 이후에 실행된다.');
  })