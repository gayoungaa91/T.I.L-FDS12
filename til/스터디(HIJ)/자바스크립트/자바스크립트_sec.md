# 20200609 - 자바스크립트 두번째 수업

- 생성자 함수 

함수 대문자로 시작하면 자바스크립트 엔진이 생성자 함수로 인식한다.

생성자 함수에서 this는 window를 가르킨다.

this 프로퍼티 값을 추가하게되면 window의 프로퍼티들로 추가된다 ( 참고로 전역객체의 프로퍼티들을 자의적으로 추가하는것은 좋지않다. 오염된다.) // this.age

따라서 생성자함수를 이용하여 인스턴스를 생성한후 this.age 프로퍼티를 추가하게 되면 인스턴스의 프로퍼티로 추가된다. 위의 문제점들을 방지할 수 있다. let a = 

인스턴스를 사용하는 이유는 재사용성과 유지보수 이다.

let a = [] ; // 리터럴

let a = new Object();




- 프로토 타입

이미 객체에 할당한후, Human.prototype.country = 'korea';로 값을 주면

이미 할당한 객체의 프토토타입에선 확인할 수 없지만

IJ.country라고 하면 값을 확인할 수 있다.

자바스크립트를 잘하는 인간들은 프로토타입을 끝장나게 활용한다.



- 함수를 재선언 하면 위에 선언한 것이 사라진다.



```
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <style>
      * {list-style: none;}
      ul {overflow: hidden;}
      li {width: 100px; height: 100px; border: 1px solid red; font-size: 40px; float: left;}
   </style>
</head>
<body>
   
   <ul class="slide-main">
      <li>1</li>
      <li>2</li>
      <li>3</li>
   </ul>

   <ul class="slide-sub">
      <li>5</li>
      <li>6</li>
      <li>7</li>
   </ul>

   <ul class="slide-box">
      <li>5</li>
      <li>6</li>
      <li>7</li>
   </ul>
   

   <script src="./MySlider.js" type="text/javascript"></script>

   <script>

      var MySlideMain = new MySlide({
         element : '.slide-main'
      });

      var MySlideSub = new MySlide({
         element : '.slide-sub'
      });

      var MySlideEtc = new MySlide();

   </script>

</body>
</html>
function MySlide(o){
    var defaultOption = {
       element : '.slide-box',
       activeClass : 'on'
    };

    // 기존에 선언된 기본 옵션 (defaultOption)에
    // 추가로 넘어온 옵션(o)을 합쳐서
    // 새로운 옵션 (this.option)을 만든다.
    this.option = Object.assign(defaultOption, o);

    var that = this;
    
    this.init = function(){
      console.log('slider before ready');      
      console.log(this.option);
    }

   //  function init(){
   //     console.log('init 2');
   //     console.log(this);
   //     console.log(that);
   //  }    

    this.init();
   //  init();
 };
 

```

