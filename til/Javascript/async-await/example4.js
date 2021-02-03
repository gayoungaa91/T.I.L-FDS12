// 지금까지는 Promise 객체를 new로 생성하여 ruturn하는 형태의 함수를 사용했었다.
// 이번에는 aync function 자체를 사용한다.



function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error('reason'));
    }, ms)
  })
}
// async 함수를 바로 호출할 수 있는 이유는 return 값에다가 Promise.resolve 함수로 감싸서 리턴하게 된다.
async function asyncP() {
  return 'Amy';
}

(async function main() {
  try {
    const name = await asyncP();
    console.log(name);
    // 정상적으로 처리되었다면 요기에 적은 코드가 실행된다.
  } catch (error) {
    console.log(error);
  }
})();