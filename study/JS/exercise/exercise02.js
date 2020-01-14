// 1. 짝수와 홀수
// evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. num이 짝수일 경우 'Even'을 반환하고 홀수인 경우 'Odd'를 반환하도록 evenOrOdd 함수를 완성하라.
// 단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.

// if문
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return 'even';
  }
  return 'Odd';
}
console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(1000));

// 3항 연산자
function evenOrOdd(num) {
  return (num % 2 === 0) ? 'even' : 'Odd';
}
console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 2. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.

// 매니저님 풀이
// function getCount8() {
//   let count = 0;  // 8의 갯수가 몇개인지 누적하는 변수
  
//   for (let i = 1; i <= 10000; i++) { // 1 부터 10000까지 하나씩 검사합니다.
//     const str = '' + i; // 이번 차례에 검사한는 숫자를 문자열로 바꿔줍니다.
    
//     tr += i
//     for (let j = 0; j < str.length; j++) { // 문자열을 한 글자씩 검사합니다.
//       if (str[j] === '8') { // 그 글자가 8이면
//         count = count + 1; // count를 하나 늘려줍니다.
//       }
//     }
//   }
//   return count; // 전부 세어놓은 count를 반환합니다.
// }

function getCount8(){
  let str = '';
  for( let i = 0; i <= 10000; i++){
    str += i;
  }
  let count = 0;
  console.log(str);
  for(let j = 0; j < str.length; j++){
  if(str[j] === '8'){
    count++;
  }
  }
  console.log(count);
}
console.log(getCount8()); // 4000

// 3. 문자열 다루기
// alphaString46 함수는 문자열 s를 매개변수로 입력받는다. s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 alphaString46 함수를 완성하라.
// 예를 들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다.

// 1번째
function alphaString46(s) {
    if(isNaN(s)){ 
      return false;
    } else{
        if (4 <= s.length && s.length <= 6 ){
          return true;
        }
        return false;
    } 
}

// 2번째
function alphaString46(s) {
  if(s && !isNaN(s) && (4 <= s.length && s.length <= 6)) {
    return true;
  } else {
    return false;
  }
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false
