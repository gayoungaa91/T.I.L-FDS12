// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
let arr = [12, 77, 38, 41, 53, 92, 85];
let odds = [];
function solution(arr) {
  let odds = [];
  let answer = 0;
  arr.filter((odd) => {
    if (odd % 2 === 1) {
      // sum += odd;
      odds.push(odd);
      if (odd < odds[0]) answer = odd;
      console.log(answer);
    }
  });
}
console.log(solution(arr));
