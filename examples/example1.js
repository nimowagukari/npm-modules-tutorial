const echo = require("../index.js");

console.log(echo("Hello,World."));
console.log(echo(123));
console.log(echo(true));
console.log(echo(/regex/));
console.log(
  echo({ key1: "value1", key2: 123, key3: { "key3.1": "value3.1" } })
);
console.log(echo(undefined));
console.log(echo(null));
