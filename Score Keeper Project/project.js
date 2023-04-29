const nr1 = document.querySelector("#nr1");
const nr2 = document.querySelector("#nr2");
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const resetbutton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#play");
let score1 = 0;
let score2 = 0;
let winningScore = 3;
let isGameOver = false;

b1.addEventListener("click", () => {
  if (!isGameOver) {
    score1 += 1;
    if (score1 === winningScore) {
      isGameOver = true;
      nr1.classList.add("has-text-success");
      nr2.classList.add("has-text-danger");
      b1.disabled = true;
      b2.disabled = true;
    }
    nr1.textContent = score1;
  }
});

b2.addEventListener("click", () => {
  if (!isGameOver) {
    score2 += 1;
    if (score2 === winningScore) {
      isGameOver = true;
      nr2.classList.add("has-text-success");
      nr1.classList.add("has-text-danger");
      b1.disabled = true;
      b2.disabled = true;
    }
    nr2.textContent = score2;
  }
});

resetbutton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  score1 = 0;
  score2 = 0;
  nr1.textContent = 0;
  nr2.textContent = 0;
  nr2.classList.remove("has-text-danger", "has-text-success");
  nr1.classList.remove("has-text-danger", "has-text-success");
  b1.disabled = false;
  b2.disabled = false;
}

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
