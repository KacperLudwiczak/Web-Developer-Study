const form = document.querySelector("form");
const ul = document.querySelector("ul");
const product = document.querySelector("#product");
const qty = document.querySelector("#qty");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const pValue = product.value;
  const qValue = qty.value;
  const li = document.createElement("li");
  li.textContent = `${pValue} ${qValue}`;
  ul.appendChild(li);
  product.value = "";
  qty.value = "";
});
