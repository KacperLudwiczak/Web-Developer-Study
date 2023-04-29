// function collectEggs() {
//   let toatalEggs = 6;
// }
// collectEggs();
// console.log(toatalEggs);

// let square = function (num) {
//   let x = num * num;
//   return x;
// };

// function bankRobbery() {
//   const heroes = ["Spiderman", "Wolverine", "Black Panther"];
//   function cryForHelp() {
//     function inner() {
//       for (let hero of heroes) {
//         console.log(`Please Help Us, ${hero.toUpperCase()}`);
//       }
//     }
//     inner();
//   }
//   cryForHelp();
// }

// function callTwice(func) {
//   func();
//   func();
// }
// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }
// callTwice(rollDie);

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }
// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }
// callTenTimes(rollDie);

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("Congrats.");
//       console.log("I am a good function.");
//     };
//   } else {
//     return function () {
//       alert("Oh nooooo!!!");
//       alert("Oh nooooo!!!");
//       alert("Oh nooooo!!!");
//     };
//   }
// }

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }
// const isChild = makeBetweenFunc(0, 17);
// const isAdult = makeBetweenFunc(18, 64);
// const isSenior = makeBetweenFunc(65, 130);

// const myMath = {
//   PI: 3.14159,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   },
// };

// const myMath = {
//   PI: 3.14159,
//   square(num) {
//     return num * num;
//   },
//   cube(num) {
//     return num ** 3;
//   },
// };

// const square = {
//   area(side) {
//     return side * side;
//   },
//   perimeter(side) {
//     return side * 4;
//   },
// };

// const cat = {
//   name: "Kot",
//   color: "grey",
//   breed: "scotisch",
//   meow() {
//     console.log(`${this.name} says MEOWWW`);
//   },
// };

// const hen = {
//   name: "Helen",
//   eggCount: 0,
//   layAnEgg() {
//     this.eggCount += 1;
//     return "EGG";
//   },
// };

// try {
//   hello.toUpperCase();
// } catch {
//   console.log("ERROR!!!");
// }
// console.log("after");

function yell(msg) {
  try {
    return msg.toUpperCase().repeat(3);
  } catch (e) {
    return "PLease, do not use something ather then string.";
  }
}
