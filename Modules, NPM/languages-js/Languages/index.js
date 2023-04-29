import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { franc } from "franc";
const langs = require("langs");
const input = process.argv[2];
const colors = require("colors");

const langCode = franc(input);
if (langCode === "und") {
  console.log("SORRY".red);
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess ist: ${language.name}`.green);
}
