//  value가 promise 객체인지 아닌지 알수 없는 경우,
//  value가 promise 객체라면 resolve로된 then 메서드를 실행한다.
//  value가 promise 객체가 아니면, value를 인자로 보내면서 then 메서드를 실행한다.

// promise 전역객체의 안에 resolve라는 함수를 실행하면서 promise를 만들어낸다.
// Promise.resolve(/* value */);
// //  인자 value로 넣을수 있는것 1. promise 객체 2. 값

// // resolve의 인자 value로 넣는것
// Promise.resolve(new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 1000);
// })).then((data) => {
//   console.log('프로미스 객체인 경우, resolve된 결과를 받아서 then이 실행됩니다.', data);
// })
// // then은 promise 객체가 resolve된후에 불리게 된다.

// Promise.resolve('bar').then(data => {
//   console.log('then메소드가 없는경우(resolve데이터가 값인경우), 바로 실행된다.', data);
// })

// Promise.reject(/* value */)

Promise.reject(new Error('reason'))
  .then(error => {})
  .catch(error => {
    console.log(error);
  })
