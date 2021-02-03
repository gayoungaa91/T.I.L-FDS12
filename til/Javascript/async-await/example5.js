
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      // reject(new Error('reason'));
    }, ms)
  })
}
// async를 사용하면 await를 사용할 수 있다.
async function asyncP() {
  const ms = await p(1000);˜å
  return 'Amy' + ms;
}

(async function main() {
  try {
    const name = await asyncP();
    console.log(name);
  } catch (error) {
    console.log(error);
  }
})();