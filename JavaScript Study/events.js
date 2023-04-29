// const button = document.querySelector("#button");
// button.onclick = () => {
//   console.log("You clicked me!");
// };
// function scream() {
//   console.log("Ahhhh");
// }
// button.onmouseenter = scream;
// document.querySelector("h1").onclick = () => {
//   alert("HHHHHH11111");
// };

// const button = document.querySelector("#button");
// button.addEventListener("click", () => {
//   console.log("Clicked!");
// });

// const button = document.querySelector("#button");
// function shout() {
//   console.log("SHOUT");
// }
// function twist() {
//   console.log("TWIST");
// }
// button.addEventListener("click", twist, { once: true });
// button.addEventListener("click", shout);

// const button = document
//   .querySelector("button")
//   .addEventListener("click", function (evt) {
//     console.log(evt);
//   });

// const input = document.querySelector("input");
// input.addEventListener("keydown", () => {
//   console.log("KEYDOWN");
// });
// input.addEventListener("keyup", () => {
//   console.log("KEYUP");
// });

// const input = document.querySelector("input");
// input.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   console.log(e.code);
// });

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
  }
});
