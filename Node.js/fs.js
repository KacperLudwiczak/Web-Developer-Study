const fs = require("fs");
const folderName = process.argv[2] || "Project";
// console.log(fs);

// fs.mkdir("Happy", { recursive: true }, (err) => {
//   console.log("IN CALLBACK");
//   if (err) throw err;
// });
// console.log("AFTER MKDIR");

// fs.mkdirSync("SAD");
// console.log("AFTER MKDIR");
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`);
  fs.writeFileSync(`${folderName}/style.css`);
  fs.writeFileSync(`${folderName}/app.js`);
} catch (e) {
  console.log("Something is WRONG");
  console.log(e);
}
