function MySlide(o) {
  this.o = o;
}

let $slideLists = document.querySelectorAll('.slide-lists');
console.log(...$slideLists)
// console.log(...$slideLists)

// (...$slideLists).style.color = 'red';
function moveNextSlide() {
 $slideLists.classList.add('on');
}



const $prevBtn = document.querySelector('.prev');
const $nextBtn = document.querySelector('.next');
$nextBtn.addEventListener('click', moveNextSlide)







function init() {
  
}
init();