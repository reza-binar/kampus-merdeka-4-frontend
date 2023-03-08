let isPandemic = true;
let canIGo = false;

let isOneMoreThanTwo = 1 > 2;
console.log(isOneMoreThanTwo);

// AND concept -> it will try to find the first false, if false exist the value is the false value
// -> if no false, it will get the last true value
let andComplex = true && 1 == 1 && "reza" && true && "whoami" && 8;
console.log(andComplex);

// OR concept -> it will try to find the first true, if true exist the value is the true value
// -> if no true, it will get the last false value
let orComplex = false || false || undefined || null;
console.log(orComplex);

let orAndComplex = (true && false) || (true && "reza") || "aldi";
orAndComplex = false || "reza" || "aldi";
console.log(orAndComplex);

console.log(!!null);
