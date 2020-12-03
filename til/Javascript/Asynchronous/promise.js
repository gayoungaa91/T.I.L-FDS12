// 프로미스를 사용해 봤는데
// 이번엔 프로미스를 만드는 함수
function increaseAndPrint(n) {
  // 콜백을 따로 받아오지 않고 새로운 promise를 만들어 반환
  return new Promise((resolve, reject) => {
    // 값이 5가 된다면 실패
    setTimeout(() => {
      const value = n + 1;
      if(value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError'
        reject(error)
        return
      }
      console.log(value);
      resolve(value)
    }, 1000)
  }); 
}
increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
