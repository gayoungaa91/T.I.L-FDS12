// 비동기작업에선 일반적으로 callback함수를 인자로 넣어  로직이 끝나면 callback 함수를 호출한다.
// 이렇게 되면, 함수가 아래로 진행되지 않고, callback함수 안으로 진행된다.

function c(callback) {
  setTimeout(() => {
    callback();
  }, 1000)
}

c(() => {
  console.log('지금은 콜백');
})

c(() => {
  c(() => {
    c(() => {
      console.log('1000ms 후에 콜백 3번쨰 실행');
    })
    console.log('1000ms 후에 콜백 번쨰 실행');
  })
})