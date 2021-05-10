// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
// 1.
// function solution(arr) {
//   return Math.min(...arr);
// }
// let arr = [5, 3, 7, 11, 2, 15, 17];
// console.log(solution(arr));

// answer
// function solution(arr) {
//   let answer,
//     min = Number.MAX_SAFE_INTEGER; // 안정적인 큰 정수
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//   }
//   answer = min;
//   return answer;
// }
// let arr = [5, 3, 7, 11, 2, 1, 17];
// console.log(solution(arr));
