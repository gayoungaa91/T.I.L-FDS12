// Promise 기본예제
// let myFirstPromise = new Promise((resolve, reject) => {
//   setTimeout(function(){
//     reject(new Error()); // Yay! Everything went well!
//   }, 250);
// });

// myFirstPromise.then(check => {
//   console.log(check)
// }).catch(e => {
//   console.log(e);
// })
  
// promise 함수만들기
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueisFiveError"
        reject(error)
        return;
      }
      console.log(value);
      resolve(value)
    }, 1000 )
  })
}

increaseAndPrint(0).then(n => {
  console.log();
})