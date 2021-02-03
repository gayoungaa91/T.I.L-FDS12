// 정상적으로 실행된것은 resolve됐음을 의미한다. 
// Promise 객체가 rejected 된 경우의 처리를 위해 try, catch를 이용한다.
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error('reason'));
    }, ms)
  })
}

(async function main() {
  try {
    const ms = await p(1000);
    // 정상적으로 처리되었다면 요기에 적은 코드가 실행된다.
  } catch (error) {
    console.log(error);
  }
})();

