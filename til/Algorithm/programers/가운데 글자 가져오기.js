function getMiddle(s) {
  let str =  s.split('')
  let i = 0;
  while(i < str.length -1) {
    if(str.length % 2) {
    str.shift() 
    } else {
      str.pop()
    }
  }
  i++;

  return str.join();
}

