//  Promise 객체를 리턴하는 함수 
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}

//  Promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then(ms => {
  console.log(`${ms} ms후에 실행된다`);
})
