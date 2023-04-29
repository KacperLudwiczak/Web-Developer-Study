const button = document.querySelector("button");
const container = document.querySelector("#container");

const makeColor = () => {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", (e) => {
  container.style.backgroundColor = makeColor();
  e.stopPropagation();
});
container.addEventListener("click", () => {
  container.classList.toggle("hide");
});
