function MySlide(o) {
  
  let that = this;

  let defaultOption = {
    element: '.slide-box',
    activeClass: 'on'
  }
  let slideIndex = 0;

  that.option = Object.assign(defaultOption, o);
  
  let element = {
    listEl : document.getElementsByTagName('li'),
    prevBtn : document.getElementById('prev'),
    nextBtn : document.getElementById('next')
  }
  console.log(that)


}

function a () {
}
const b = new a
console.log(typeof b)
a();