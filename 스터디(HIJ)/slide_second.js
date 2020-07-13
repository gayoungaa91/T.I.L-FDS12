function MySlide(o) {
  
  var that = this;

  var defaultOption = {
    element : '.slide-box',
    activeClass : 'on',
    // slidIndex : 0
  }
  var slideIndex = 0;

  that.option = Object.assign(defaultOption, o);

  var element = {
    listEl : document.getElementsByTagName('li'),
    prevBtn : document.getElementById('prev'),
    nextBtn : document.getElementById('next')
  };

  var that = this;

  this.prev = function() {
    console.log('prev');
    // var prvCnt = slideIndex;
    // // slideIndex = Math.max(slideIndex -1, 0);
    // if(prvCnt  === 0) {
    //   prvCnt = 2;
    // } else {
    //   prvCnt = prvCnt-1
    // }

    // document.querySelector('.on').classList.remove('on');
    // element.listEl[slideIndex].classList.add('on');
    that.slideMove(slideIndex-1);
    console.log(slideIndex);
  }
  this.next = function () {
    console.log('next');
    // var nextCnt = slideIndex;
    // // slideIndex = Math.min(slideIndex +1, 2);
    // if(nextCnt  === 2) {
    //   nextCnt = 0;
    // } else {
    //   nextCnt = nextCnt+1
    // }

    // document.querySelector('.on').classList.remove('on');
    // element.listEl[slideIndex].classList.add('on');
    that.slideMove(slideIndex+1);
  }

  this.slideMove = function(cnt) {

    if(cnt < 0) {
      slideIndex = 2;
    } else if (cnt > 2) {
      slideIndex = 0;
    } else { 
      slideIndex = cnt;
    }

    document.querySelector('.on').classList.remove('on');
    element.listEl[slideIndex].classList.add('on');
  }

  
  // function init 은 윈도우를 참조하고 this.init은 생성자함수 마이슬라이드를 참조한다.
  this.init = function() {
    console.log('slider before ready');
    console.log(that.option)

    
    // console.log(this.element);

    // 이벤트 바인딩
    document.getElementById('prev').addEventListener('click', this.prev);
    document.getElementById('next').addEventListener('click', this.next);
  }

  function init() {
    // console.log('init 2');
    // console.log(this);
    // console.log(that);
  }

  this.init();
  init();
};

// console.log(Math.max(1, 100))