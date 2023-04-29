// const input = document.querySelector("input");
// input.addEventListener("change", (e) => {
//   console.log("CHANGE");
// });

const input = document.querySelector("input");
const h1 = document.querySelector("h1");
input.addEventListener("input", (e) => {
  if (input.value === "") {
    h1.textContent = "Enter Your Username";
  } else {
    h1.textContent = `Welcome, ${input.value}`;
  }
});
