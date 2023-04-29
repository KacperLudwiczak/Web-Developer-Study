// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 6; i++) {
//   console.log("Da ba dee da ba daa");
// }

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//   console.log(i);
// }

// for (let i = 25; i >= 0; i -= 5) {
//   console.log(i);
// }

// let animals = ["pingwin", "lew", "tygrys", "delfin", "jeż", "skorpion", "wąż"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// let animals = ["pingwin", "lew", "tygrys", "delfin", "jeż", "skorpion", "wąż"];
// for (let i = animals.length - 1; i >= 0; i--) {
//   console.log(i, animals[i]);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].toUpperCase());
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`i is ${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`      j is ${j}`);
//   }
// }

// const imiona = [
//   ["Kacper", "Szymon", "Eryk"],
//   ["Justyna", "Ala", "Asia"],
//   ["Ola", "Piotr", "Kaja"],
// ];
// for (let i = 0; i < imiona.length; i++) {
//   const wiersz = imiona[i];
//   console.log(`Wiersz #${i + 1}`);
//   for (let j = 0; j < wiersz.length; j++) {
//     console.log(wiersz[j]);
//   }
// }

// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }

// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// const sekret = "HAPPY!";
// let próba = prompt("Wpisz kod");
// while (próba !== sekret) {
//   próba = prompt("Wpisz kod");
// }
// console.log("Poprawny kod.");

// let input = prompt("Powiedź coś.");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop") break;
// }
// console.log("Koniec");

// const subreddit = ["cringe", "books", "funny", "soccer"];
// for (let i = 0; i < subreddit.length; i++) {
//   console.log(`Visit reddit.com/r/${subreddit[i]}`);
// }

// const subreddit = ["cringe", "books", "funny", "soccer"];
// for (let sub of subreddit) {
//   console.log(`Visit reddit.com/r/${sub}`);
// }

// const imiona = [
//   ["Kacper", "Szymon", "Eryk"],
//   ["Justyna", "Ala", "Asia"],
//   ["Ola", "Piotr", "Kaja"],
// ];
// for (let wiersz of imiona) {
//   for (let student of wiersz) {
//     console.log(student);
//   }
// }

// for (let wypiszLitery of "Hello World") {
//   console.log(wypiszLitery);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let num of numbers) {
//   console.log(num ** num);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let num of numbers) {
//   console.log(num * num);
// }

// const testScores = {
//   keenan: 80,
//   damon: 67,
//   kim: 89,
//   shawn: 91,
//   dwayne: 77,
// };
// for (let person in testScores) {
//   console.log(`${person} scored ${testScores[person]}`);
// }

// const testScores = {
//   keenan: 80,
//   damon: 67,
//   kim: 89,
//   shawn: 91,
//   dwayne: 77,
// };
// let total = 0;
// for (let score of Object.values(testScores)) {
//   total += score;
// }
// console.log(`Total: ${total}`);

const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  dwayne: 77,
};
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}
console.log(`Avrage: ${total / scores.length}`);
