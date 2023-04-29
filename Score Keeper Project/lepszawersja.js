const p1 = {
  score: 0,
  button: document.querySelector("#b1"),
  nr: document.querySelector("#nr1"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#b2"),
  nr: document.querySelector("#nr2"),
};

const resetbutton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#play");

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.nr.classList.add("has-text-success");
      opponent.nr.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.nr.textContent = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});
p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

resetbutton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.nr.textContent = 0;
    p.nr.classList.remove("has-text-danger", "has-text-success");
    p.button.disabled = false;
  }
}

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
