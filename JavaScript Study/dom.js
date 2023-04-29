// const allImages = document.getElementsByTagName("img");
// for (let img of allImages) {
//   console.log(img.src);
// }

// const allImages = document.getElementsByTagName("img");
// for (let img of allImages) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
// }

// const squareImages = document.getElementsByClassName("square");
// for (let img of squareImages) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
// }

// const banner = document.querySelector("#banner");
// const square = document.querySelector(".square");
// const img = document.querySelector("img:nth-of-type(2)");
// const java = document.querySelector('a[title="Java"]');
// const p = document.querySelectorAll("p");
// const a = document.querySelectorAll("a");

// const p_a = document.querySelectorAll("p a");
// for (let links of p_a) {
//   console.log(links.href);
// }

// const pText1 = document.querySelector("p").innerText;
// const pText2 = (document.querySelector("p").innerText =
//   "aaaaaaaaaaaaalllllooooooooolllllllllll");

// const pText1 = document.querySelector("p").textContent;

// const allLinks = document.querySelectorAll("a");
// for (let link of allLinks) {
//   link.innerText = "I AM A LINK!";
// }

// document.querySelector("h1").innerHTML = "<i>AAAaaa</i>";
// document.querySelector("h1").innerHTML += "<sup>iiii</sup>";

// document.querySelector("#banner").id = "whoops";
// document.querySelector("#banner").src;
// document.querySelector("a").href;
// document.querySelector("a").title;

// const firstLink = document.querySelector("a");
// console.log(firstLink.href);
// console.log(firstLink.getAttribute("href"));
// console.log(firstLink.getAttribute("title"));

// const firstLink = document.querySelector("a");
// firstLink.setAttribute("href", "https://www.google.pl/");

// const input = document.querySelector('input[type="text"]');
// console.log(input.type);
// console.log((input.type = "password"));
// console.log(input.setAttribute("type", "text"));

// const h1 = document.querySelector("h1");
// h1.style.color = "green";
// h1.style.fontSize = "3em";
// h1.style.border = "2px solid blue";

// const alltLink = document.querySelectorAll("a");
// for (let link of alltLink) {
//   link.style.color = "green";
//   link.style.textDecorationColor = "magenta";
//   link.style.textDecorationStyle = "wavy";
// }

// const h1 = document.querySelector("h1");
// h1.style.textAlign = "center";

// const img = document.querySelector("img");
// img.style.width = "800px";
// img.style.borderRadius = "50%";

// const h2 = document.querySelector("h2");
// h2.setAttribute("class", "purple");

// const h2 = document.querySelector("h2");
// h2.classList.add("purple", "border");
// h2.classList.remove("border");
// console.log(h2.classList.contains("border"));
// console.log(h2.classList.contains("purple"));

// const h2 = document.querySelector("h2");
// h2.classList.toggle("purple");
// h2.classList.toggle("purple");
// h2.classList.toggle("purple");
// h2.classList.toggle("purple");

// const firstBold = document.querySelector("b");
// console.log(firstBold);
// console.log(firstBold.parentElement);
// console.log(firstBold.parentElement.parentElement);
// console.log(firstBold.parentElement.parentElement.parentElement);
// const paragraph = firstBold.parentElement;
// console.log(paragraph.children);
// console.log(paragraph.children[0]);
// console.log(paragraph.children[3]);
// console.log(paragraph.children[3].parentElement);

// const squareImg = document.querySelector(".square");
// console.log(squareImg);
// console.log(squareImg.nextSibling);
// console.log(squareImg.previousSibling);
// console.log(squareImg.nextElementSibling);
// console.log(squareImg.previousElementSibling);

// const newImg = document.createElement("img");
// console.dir(newImg);
// newImg.src =
//   "https://images.unsplash.com/photo-1512356587788-4f5ad49c16e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80";
// document.body.appendChild(newImg);
// newImg.classList.add("square");

// const newH3 = document.createElement("h3");
// newH3.innerText = "I am New!";
// document.body.appendChild(newH3);

// const p = document.querySelector("p");
// p.append("Newwwwww!!!!", "Guy");
// const newB = document.createElement("b");
// newB.append("Hiii.");
// p.prepend(newB);

// const h2 = document.createElement("h2");
// h2.append("Super kurczak xd.");
// const h1 = document.querySelector("h1");
// h1.insertAdjacentElement("afterend", h2);
// const h3 = document.createElement("h3");
// h3.innerText = "I am h3.";
// h1.after(h3);

// for (let i = 1; i <= 100; i++) {
//   const button = document.createElement("button");
//   button.innerText = "Hey!";
//   const h1 = document.querySelector("h1");
//   h1.appendChild(button);
// }

// const firstLi = document.querySelector("li");
// const ul = firstLi.parentElement;
// ul.removeChild(firstLi);

// const img = document.querySelector("img");
// img.remove();
