//  asyncP reject 경우,
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error('reason'));
    }, ms)
  })
}
// 에러를 어디서 처리해야 하는지 알수 있고, 컨트롤 할수도 있다.
async function asyncP() {
  const ms = await p(1000);
  return 'Amy' + ms;
}
// main안에있는 try, catch에서 해결할 수 있는 방식으로 되어있다.
// asyncP에서 에러를 처리하고 정상적인 결과를 보내고 싶다면
// await p(1000)을 호출할 때 try, catch로 감싸서 에러에 대한 처리를 하고 
// 순차적인 코드진행흐름으로 return 될수있게도 가능하다.
(async function main() {
  try {
    const name = await asyncP();
    console.log(name);
  } catch (error) {
    console.log(error);
  }
})();