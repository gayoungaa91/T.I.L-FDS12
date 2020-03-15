function solution (str) {
  let answer = [];
  answer = str.split('');
  answer = answer.reverse();
  answer = answer.join('');
  return answer;
}