// const makeColor = () => {
//   let r = Math.floor(Math.random() * 255) + 1;
//   let g = Math.floor(Math.random() * 255) + 1;
//   let b = Math.floor(Math.random() * 255) + 1;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// const buttons = document.querySelectorAll("button");
// for (let button of buttons) {
//   button.addEventListener("click", () => {
//     button.style.backgroundColor = makeColor();
//     button.style.color = makeColor();
//   });
// }

// const h1s = document.querySelectorAll("h1");
// for (let h1 of h1s) {
//   h1.addEventListener("click", () => {
//     h1.style.backgroundColor = makeColor();
//     h1.style.color = makeColor();
//   });
// }

const makeColor = () => {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", colorize);
}

const h1s = document.querySelectorAll("h1");
for (let h1 of h1s) {
  h1.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = makeColor();
  this.style.color = makeColor();
}
