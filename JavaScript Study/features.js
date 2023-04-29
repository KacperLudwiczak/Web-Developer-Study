// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }

// function rollDie(numSides = 6) {
//   return Math.floor(Math.random() * numSides) + 1;
// }

// function greet(person, msg = "Hey", punc = "!!!!") {
//   console.log(`${msg}, ${person}${punc}`);
// }

// const nums = [1, 2, 3, 84, 41, 25, 10];
// console.log(nums);
// console.log(...nums);
// console.log(Math.max(nums));
// console.log(Math.max(...nums));
// console.log("HELLO");
// console.log(..."HELLO");

// const cats = ["Blue", "Scout", "Rocket"];
// const dogs = ["Rusty", "Wyatt"];
// const allPets = [...cats, ...dogs];
// const allPets2 = cats.concat(dogs);
// const allPets3 = [...cats, ...dogs, "Speedy", 1, 2, 3, ..."Speedy"];

// const feline = { legs: 4, family: "Felidae" };
// const canine = { isFurry: true, family: "Caninae" };
// const feline2 = { ...feline, color: "black" };
// const catDog = { ...canine, ...feline };
// const catDog2 = { ...feline, ...canine };
// const catDog3 = { ...feline, ...canine, family: "Joo" };

// function sum(...nums) {
//   return nums.reduce((total, el) => total + el);
// }

// function raceResult(gold, silver, ...everyoneElse) {
//   console.log(`Gold goes to ${gold}`);
//   console.log(`Silver goes to ${silver}`);
//   console.log(`Thanks to everyone else ${everyoneElse}`);
// }

// const scores = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const [gold, silver, bronze, ...losers] = scores;

const user = {
  firstName: "Jon",
  lastName: "Smith",
  age: 35,
};
const { age, firstName: Imię, lastName: Nazwisko, city = "Kraków" } = user;
const fullName = ({ firstName, lastName }) => {
  return `${firstName} ${lastName}`;
};
console.log(fullName(user));
