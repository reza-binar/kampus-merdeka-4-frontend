/* Normal function is usually used in javascript */
function calculateCube(length) {
  return length ** 3;
}

const cubeA = calculateCube(10);
console.log(cubeA);

/* Arrow function */
const calculateBallLongVersion = (radius) => {
  return (4 / 3) * Math.PI * radius ** 3;
};
// Can be shorten
const calculateBall = (radius) => (4 / 3) * Math.PI * radius ** 3;

const ballA = calculateBall(14);
console.log(ballA);

/* Currying function */
const calculateTubeLongVersion = (radius) => (height) => {
  return Math.PI * radius ** 2 * height;
};
// Can be shorten
const calculateTube = (radius) => (height) => Math.PI * radius ** 2 * height;

const tubeA = calculateTube(10)(10);
console.log(tubeA);
