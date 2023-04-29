// class Cat {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   meow() {
//     return "MEOWWW!!!";
//   }
// }
// const kitty = new Cat("Kitty", 9);
// console.log(kitty);
// console.log(kitty.name);
// console.log(kitty.age);
// console.log(kitty.eat());
// console.log(kitty.meow());

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   wof() {
//     return "WOFFF!!!";
//   }
// }
// const doggy = new Dog("Doggy", 5);
// console.log(doggy);
// console.log(doggy.name);
// console.log(doggy.age);
// console.log(doggy.eat());
// console.log(doggy.wof());

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  constructor(name, age, liveLefts = 4) {
    super(name, age);
    this.liveLefts = liveLefts;
  }
  meow() {
    return "MEOWWW!!!";
  }
}
const kitty = new Cat("Kitty", 9);
console.log(kitty);
console.log(kitty.name);
console.log(kitty.age);
console.log(kitty.eat());
console.log(kitty.meow());
console.log(kitty.liveLefts);

class Dog extends Pet {
  wof() {
    return "WOFFF!!!";
  }
  eat() {
    return `${this.name} is eating (Other Version)!!!`;
  }
}
const doggy = new Dog("Doggy", 5);
console.log(doggy);
console.log(doggy.name);
console.log(doggy.age);
console.log(doggy.eat());
console.log(doggy.wof());
