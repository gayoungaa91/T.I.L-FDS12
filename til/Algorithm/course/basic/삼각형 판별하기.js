// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
// function solution(a, b, c) {
//   let arr = [];
//   arr.push(a, b, c);
//   arr.sort((a, b) => b - a);
//   if (arr[0] < arr[1] + arr[2]) {
//     console.log('YES');
//   } else console.log('NO');
// }
// solution(7, 6, 11);
// solution(13, 33, 17);

// 2
// function solution(a, b, c) {
//   let answer = 'YES',
//     max;
//   let sum = a + b + c;
//   if (a > b) max = a;
//   else max = b;
//   if (c < max) max = c;
//   if (sum - max <= max) answer = 'NO';
//   return answer;
// }
// solution(7, 6, 11);
// solution(13, 33, 17);
