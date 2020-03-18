function solution (str) {
  let answer = str.split('').sort().reverse().join('');
  return answer;
}