class Parent {
  name;

  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log('hello', this.name);
  }
}

class Child extends Parent {
  age;

  constructor(name, age) {
    super(name)
    this.age = age;
  }
  hello () {
    console.log('hello', this.name, this.age);
  }
}

const p = new Parent('mark');
const c = new Child('mark', 23);

console.log(p, c);
// console.log(p.hello());
console.log(c.hello()); 