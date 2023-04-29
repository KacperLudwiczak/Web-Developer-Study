// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

for (let i = 1; i <= 905; i++) {
  const container = document.querySelector("#container");
  const baseURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  pokemon.append(newImg);
  pokemon.append(label);
  container.append(pokemon);
}
