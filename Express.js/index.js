const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.use((req, res) => {
//   console.log("New Request");
//   res.send("Respond");
// });

// /cats => 'MEEOW'
app.get("/cats", (req, res) => {
  // console.log("Cat Request");
  res.send("MEEOW");
});

app.post("/cats", (req, res) => {
  res.send("Post Respond");
});

// /dogs => 'WOOF'
app.get("/dogs", (req, res) => {
  // console.log("Dog Request");
  res.send("WOOF");
});

// '/' => "Home Page"
app.get("/", (req, res) => {
  res.send("<h1>Home Page<h1>");
});

app.get("/r/:subreddit", (req, res) => {
  // console.log(req.params);
  // res.send("SubReddit");
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  // console.log(req.params);
  // res.send("SubReddit");
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>Viewing the Post ID: ${postId} on the ${subreddit} subreddit</h1>`
  );
});

// search?q=monkey&color=blue
app.get("/search", (req, res) => {
  // console.log(req.query);
  // res.send("HI");
  const { q } = req.query;
  if (!q) {
    res.send("NO q!!!");
  }
  res.send(`<h1>Search result for: ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("Page not find!");
});
