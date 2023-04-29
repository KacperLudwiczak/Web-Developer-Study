console.log("HELLO");

if (1 + 1 === 2) {
  console.log("Math!!!");
}

let random = Math.random();
if (random < 0.3) {
  console.log("Less than 0.3");
} else {
  console.log("Greater than 0.3");
}
console.log("The number is " + random);

// let age = prompt("Your age?");
// if (age < 18) {
//   console.log("You can't drink alcohol and You can't run for president.");
// } else if (age < 35) {
//   console.log("You can drink alcohol, but You can't run for president.");
// } else {
//   console.log("You can drink alcohol and You can run for president.");
// }

// const password = prompt("Enter a password");
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Good password.");
//   } else {
//     console.log("Password cannot contain spaces.");
//   }
// } else {
//   console.log("Too short password. Must be 6+ characters.");
// }

// const password = prompt("Enter a password");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Good password.");
// } else {
//   console.log("Wrong password.");
// }

// let age = prompt("Your age?");
// if ((age >= 0 && age <= 10) || age >= 65) {
//   console.log("Your ticket is for FREE.");
// } else if (age > 10 && age < 18) {
//   console.log("Your ticket cost $15.");
// } else if (age >= 18 && age < 65) {
//   console.log("Your ticket cost $35.");
// } else {
//   console.log("Wrong age.");
// }

// let firstName = prompt("Write name.");
// if (!firstName) {
//   firstName = prompt("Try again.");
// }

// const day = prompt("Write number.");
const day = 45;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Wrong number");
}
