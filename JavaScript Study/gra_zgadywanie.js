let max = parseInt(prompt("Wpisz maksymalną liczbę."));
while (!max) {
  max = parseInt(prompt("Wprowadź dobrą liczbę."));
}

const wylosowanaLiczba = Math.floor(Math.random() * max) + 1;

let wybranaLiczba = prompt("Wpisz pierwszą próbę.");
let próba = 1;

while (parseInt(wybranaLiczba) !== wylosowanaLiczba) {
  if (wybranaLiczba === "q") break;

  próba++;

  if (wybranaLiczba > wylosowanaLiczba) {
    wybranaLiczba = prompt("Za duża. Spróbuj jeszcze.");
  } else if (wybranaLiczba < wylosowanaLiczba) {
    wybranaLiczba = prompt("Za mała. Spróbuj jeszcze.");
  } else {
    console.log("Ani za mała ani za duża.");
  }
}
if (wybranaLiczba === "q") {
  console.log("Poddałeś się.");
} else {
  console.log(
    `Masz to!!! Za ${próba} próbą. Poprawna liczba to: ${wylosowanaLiczba}.`
  );
}
