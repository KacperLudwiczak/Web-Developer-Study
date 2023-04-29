let input = prompt("What would you like to do?");
const todo = [];
while (input !== "quit" && input !== "q") {
  input = prompt("What would you like to do?");
  if (input === "list") {
    console.log("**********");
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i}: ${todo[i]}`);
    }
    console.log("**********");
  } else if (input === "new") {
    const newTodo = prompt("OK. What is the new todo?");
    todo.push(newTodo);
    console.log(`${newTodo} added to the list.`);
  } else if (input === "delete") {
    const index = parseInt(prompt("OK. Enter an index to delete"));
    if (!Number.isNaN(index)) {
      const deleted = todo.splice(index, 1);
      console.log(`OK. Delete ${deleted[0]}`);
    } else {
      console.log("Unknown index!");
    }
  }
}
console.log("OK. You Quit App.");
