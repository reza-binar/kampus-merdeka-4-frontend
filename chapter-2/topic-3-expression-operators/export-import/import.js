/* The first way to import */
const importFunction = require("./export");

console.log(importFunction);
console.log(importFunction.randomNumber);
console.log(importFunction.calculateBallLongVersion(7));

/* The second way to import */
const { calculateBallLongVersion } = require("./export3");

console.log(calculateBallLongVersion(14));
