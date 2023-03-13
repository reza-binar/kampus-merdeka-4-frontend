const numberA = 10;
const numberB = 10;

const resultSimple =
  numberA > numberB
    ? `${numberA} more than ${numberB}`
    : `${numberB} more than ${numberA}`;
console.log(resultSimple);

const result =
  numberA > numberB
    ? `${numberA} more than ${numberB}`
    : numberA == numberB
    ? `${numberB} is equal to ${numberA}`
    : `${numberB} more than ${numberA}`;
console.log(result);

let resultWithIf;
if (numberA > numberB) {
  resultWithIf = `${numberA} more than ${numberB}`;
} else {
  if (numberA == numberB) {
    resultWithIf = `${numberB} is equal to ${numberA}`;
  } else {
    resultWithIf = `${numberB} more than ${numberA}`;
  }
}
console.log(resultWithIf);
