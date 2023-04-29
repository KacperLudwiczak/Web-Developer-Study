const commentForm = document.querySelector("#commentForm");
const ul = document.querySelector("#ulComments");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userNameInput = commentForm.elements.username;
  const commentsInput = commentForm.elements.comment;
  addCom(userNameInput.value, commentsInput.value);
  userNameInput.value = " ";
  commentsInput.value = " ";
});

const addCom = (username, comment) => {
  const newCom = document.createElement("li");
  const name = document.createElement("b");
  name.append(username);
  newCom.append(name);
  newCom.append(` - ${comment}`);
  ul.append(newCom);
};

ul.addEventListener("click", (e) => {
  e.target.remove();
});
