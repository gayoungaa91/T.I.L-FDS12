function MySlide(o){
    
  var that = this;

    var defaultOption = {
      //  element : '.slide-box',
       activeClass : 'on',
       slideIndex : 0
    };

    // var slideIndex = 0;

    // 기존에 선언된 기본 옵션 (defaultOption)에
    // 추가로 넘어온 옵션(o)을 합쳐서
    // 새로운 옵션 (this.option)을 만든다.
    that.option = Object.assign(defaultOption, o);

    // that.option.element + ' li'
    // .slide-main-box li

    this.element = {
      listEl : document.querySelector(that.option.element + ' li'),
      prevBtn : document.querySelector(that.option.element + ' .prev'),
      nextBtn : document.querySelector(that.option.element + ' .next'),
    };
    
    
    // function prev(){
    //   console.log('prev');
    // }

    this.prev = function(){
      console.log('move prev');
      that.slideMove(that.option.slideIndex-1);
    }

    this.next = function(){
      console.log('move next');
      that.slideMove(that.option.slideIndex+1);      
    }

    this.slideMove = function(cnt){

      // that.option.slideIndex = Math.min( Math.max(cnt, 0) , 2);
      if(cnt < 0){
        that.option.slideIndex = 2;
      }else if(cnt > 2){
        that.option.slideIndex = 0;
      }else{
        that.option.slideIndex = cnt;
      }

      // document.querySelector('.on').classList.remove('on');
      document.querySelector(that.option.element + ' .on').classList.remove('on');

      console.log( that.option.slideIndex );

      // that.element.listEl[that.option.slideIndex].classList.add('on');

    }

    this.init = function(){
      console.log('slider before ready');      
      console.log(that.option);

      // 이벤트 바인딩
      document.querySelector(that.option.element + ' .prev').addEventListener('click', this.prev);
      document.querySelector(that.option.element + ' .next').addEventListener('click', this.next);

    }

   //  function init(){
   //     console.log('init 2');
   //     console.log(this);
   //     console.log(that);
   //  }    

    this.init();
   //  init();
 };