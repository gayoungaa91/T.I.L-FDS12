function increasePrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1
    console.log(increased);
    if(callback) {
      callback(increased)
    }
  }, 1000)
}

increasePrint(0, n => {
  increasePrint(n, n => {
    increasePrint(n, n => {
      increasePrint(n, n => {
        increasePrint(n, n=> {
          console.log('작업끄읕');
        })
      })
    })
  })
})