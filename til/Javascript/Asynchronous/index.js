function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for(let i = 0; i < 1000000000; i++) {
  
    }
    const end = Date.now()
    console.log(end - start + 'ms');
    callback(end - start)
  }, 0)
  // 실제로는 4ms후에 실행됨,
  // 브라우저에서 지정한 죄소한의 시간이기 때문에
}

console.log('작업 시작');
work((ms) => {
  console.log('작업이 끝났습니다!');
  console.log(ms + 'ms 걸렸다고 합니다');
})
console.log('다음 작업');