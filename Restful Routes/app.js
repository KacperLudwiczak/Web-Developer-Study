const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
uuid();
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));

app.listen(3000, () => {
  console.log("PORT 3000");
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`Here are your ${qty} ${meat}`);
});

// GET /comments - list all comments
// POST /comments - Create a new comment
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment

const comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "LOL funny",
  },
  {
    id: uuid(),
    username: "Skyler",
    comment: "Like dog",
  },
  {
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Delete account Todd",
  },
  {
    id: uuid(),
    username: "Onlysaywoof",
    comment: "woof woof woof",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new", { comments });
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});
