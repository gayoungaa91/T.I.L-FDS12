function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i<10000000; i++) {

    }
    const end =Date.now();
    console.log((end - start + 'ms'));
    callback(end - start)
  }, 0) 
  //  실제로는 4ms 후에 실행됨(브라우저가 지정한 최소시간)
}
console.log('작업시작');
work((ms) => {
  console.log('작업이 끝났쭙니다')
  console.log(ms + 'ms 걸렸쭙니당');
});
console.log('다음 작업');