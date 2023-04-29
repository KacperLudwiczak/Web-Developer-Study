// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach(function (element) {
//     console.log(element);
// });
// for (let el of numbers){
//     console.log(el)
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach(function (element) {
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// });

// const movies = [
//   { title: "Amadeus", score: 99 },
//   { title: "Stand by me", score: 85 },
//   { title: "Parasite", score: 95 },
//   { title: "Alien", score: 90 },
// ];
// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const doubles = numbers.map(function (num) {
//   return num * 2;
// });

// const movies = [
//   { title: "Amadeus", score: 99 },
//   { title: "Stand by me", score: 85 },
//   { title: "Parasite", score: 95 },
//   { title: "Alien", score: 90 },
// ];
// const titles = movies.map(function (movie) {
//   return movie.title.toUpperCase();
// });

// const fullNames = [
//   { first: "Albus", last: "Dumbledore" },
//   { first: "Harry", last: "Potter" },
//   { first: "Hermione", last: "Granger" },
//   { first: "Ron", last: "Weasley" },
//   { first: "Rubeus", last: "Hagrid" },
//   { first: "Minerva", last: "McGonagall" },
//   { first: "Severus", last: "Snape" },
// ];
// const firstNames = fullNames.map(function (names) {
//   return names.first;
// });

// const add = function (num1, num2) {
//   return num1 + num2;
// };
// const mult = (num1, num2) => {
//   return num1 * num2;
// };
// const square = (num) => {
//   return num * num;
// };
// const rollDie = () => {
//   return Math.floor(Math.random() * 10) + 1;
// };

// const greet = (element) => {
//   return `Hey ${element}!`;
// };

// const rollDie = () => Math.floor(Math.random() * 10) + 1;
// const add = (a, b) => a + b;

// const movies = [
//   { title: "Amadeus", score: 99 },
//   { title: "Stand by me", score: 85 },
//   { title: "Parasite", score: 95 },
//   { title: "Alien", score: 90 },
// ];
// const newMovies = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`;
// });

// const movies = [
//   { title: "Amadeus", score: 99 },
//   { title: "Stand by me", score: 85 },
//   { title: "Parasite", score: 95 },
//   { title: "Alien", score: 90 },
// ];
// const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);

// console.log("Hello...");
// setTimeout(() => {
//   console.log("...all you still there?");
// }, 3000);

// const id = setInterval(() => {
//   console.log(Math.random());
// }, 3000);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filter = numbers.filter((n) => {
//   return n < 5;
// });

// const movies = [
//   { title: "Amadeus", score: 99, year: 1984 },
//   { title: "Stand by me", score: 85, year: 1986 },
//   { title: "Skarknado", score: 35, year: 2013 },
//   { title: "13 going on 30", score: 70, year: 2004 },
//   { title: "Waterworld", score: 62, year: 1995 },
//   { title: "Alien", score: 90, year: 1979 },
// ];
// const goodMovies = movies.filter((m) => m.score > 80);
// const goodTitles = movies.filter((m) => m.score > 80).map((m) => m.title);
// const badMovies = movies.filter((m) => m.score < 80);
// const recentMovies = movies.filter((m) => m.year > 2000);

// function validUserNames(usernames) {
//   for (let el of usernames) {
//     if (el.length < 10) {
//       console.log(el);
//     }
//   }
// }

// function validUserNames(usernames) {
//   let names = usernames.filter((username) => username.length < 10);
//   return names;
// }

// const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77];
// let final = exams.every((score) => score >= 75);

// const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77];
// let final = exams.some((score) => score >= 75);

// const movies = [
//   { title: "Amadeus", score: 99, year: 1984 },
//   { title: "Stand by me", score: 85, year: 1986 },
//   { title: "Skarknado", score: 35, year: 2013 },
//   { title: "13 going on 30", score: 70, year: 2004 },
//   { title: "Waterworld", score: 62, year: 1995 },
//   { title: "Alien", score: 90, year: 1979 },
// ];
// let movieYear = movies.some((movie) => movie.year > 2015);

// function allEvens(num) {
//   return num.every((n) => n % 2 === 0);
// }

// const prices = [9.99, 1.5, 19.99, 49.99, 30.5];
// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// const prices = [9.99, 1.5, 19.99, 49.99, 30.5];
// const final = prices.reduce((total, price) => {
//   return total + price;
// });

// const prices = [9.99, 1.5, 19.99, 49.99, 30.5];
// const minNumber = prices.reduce((min, price) => {
//   if (price < min) {
//     return price;
//   }
//   return min;
// });
// const maxNumber = prices.reduce((max, price) => {
//   if (price > max) {
//     return price;
//   }
//   return max;
// });

// const movies = [
//   { title: "Amadeus", score: 99, year: 1984 },
//   { title: "Stand by me", score: 85, year: 1986 },
//   { title: "Skarknado", score: 35, year: 2013 },
//   { title: "13 going on 30", score: 70, year: 2004 },
//   { title: "Waterworld", score: 62, year: 1995 },
//   { title: "Alien", score: 90, year: 1979 },
// ];
// const greathestMovie = movies.reduce((bestMovie, currMovie) => {
//   if (currMovie.score > bestMovie) {
//     return currMovie;
//   }
//   return bestMovie;
// });

// const evens = [2, 4, 6, 8];
// let total = evens.reduce((sum, num) => sum + num, 100);

const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullName());
    }, 2000);
  },
};
