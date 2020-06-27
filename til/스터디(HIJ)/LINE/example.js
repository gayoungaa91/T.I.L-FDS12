function mySlide(o) {
  var defaultOption = {
    element:'slid-box',
    activeClass:'on'
  };

  this.option= o;

  // 이런식으로 변수에 this를 담아서 사용하기도 한다
  var that = this;

  this.init = function() {
    console.log('init 1')
    console.log(this);
  }

  // function init() {
  //   console.log('init2');
  //   // 또다시 window를 참조하기 때문에 조심해서 써야함
  //   console.log(this);
  //   console.log(that);
  // }

  // init();
  this.init();

};