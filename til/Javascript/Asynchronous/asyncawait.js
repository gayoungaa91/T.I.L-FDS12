function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

 async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

// async 문법에서 에러를 잡아낼 떄
async function process() {
 try {
   await makeError()
 } catch (e) {
   console.log(e);
 }
}

process(); 