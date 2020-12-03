// function Animal(type, name, sound) {
//   this.type = type;
//   this.name = name;
//   this.sound = sound;
// }

// Animal.prototype.say = function() {
//   console.log(this.sound);
// }

// function Dog(name, sound) {
//   Animal.call(this, '개', name, sound);
//   //  첫번째 파라미터는 이 객체 생성자함수의 this를 넣어준다. 
//   // 그다음은 파라미터를 의미한다.
// }

// function Cat(name, sound) {
//   Animal.call(this, '고양이', name, sound);
// }

// Dog.prototype = Animal.prototype;
// Cat.prototype = Animal.prototype;

// const dog = new Animal('개', '사랑이', '멍멍')
// const cat = new Animal('고양이', '루이', '냐옹');
// dog.say();
// cat.say();

// -------------------------------------

// 클래스
// class Animal {
//   constructor(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//   }
//   say() {
//     console.log(this.sound);
//   }
// }
// 클래스 내부에서 함수를 만들게 되면 자동으로 프로토타입으로 등록이 된다.
// 클래스 문법을 사용하게 되면 상속을 훨씬 더 쉽게 사용할 수 있다.
// 객체생성과 프로토타입을 좀 더 쉽게 사용하기 위해서 만들어지 문법이다.
// super를 사용하면 상속받은 클래스의 constructor를 먼저 호출하여 처리할 수 있다.

// extends, 특정클래스를 상속받는다는 뜻이다.
// 기존 Animal constuctor를 덮어쓰면서, 
// super라는 키워드를 사용해 Animal이 갖고있는 constructor를 호출한 후에
// 자신의 할일을 처리할 수 있다.

// class Dog extends Animal {
//   constructor(name, sound) {
//     super('개', name, sound);
//   }
// }
// class Cat extends Animal {
//   constructor(name, sound) {
//     super('고양이', name, sound);
//   }
// }


// const dog = new Dog('사랑이', '멍멍');
// const cat = new Cat('루이', '냐옹');

// dog.say();
// cat.say();

class Food{
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand)
  }
  print() {
    console.log(`${this.name} 을 파는 음식점들`);
    console.log(this.brands.join(', '));
  }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노');

const chicken = new Food('치킨');
chicken.addBrand('굽네');
chicken.addBrand('bbq');

pizza.print()
chicken.print()