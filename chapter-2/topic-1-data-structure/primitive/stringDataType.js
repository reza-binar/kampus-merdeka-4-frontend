const commonString = "This is common string";
const tickString = 'This is "tick string"';
const simpleBacktick = `This is simple backtick`;
const complexBacktick = `Lorem ipsum dolor sit amet consectetur, 
adipisicing elit. Delectus omnis quaerat ex eveniet quibusdam fuga atque ab velit recusandae, 
natus dicta architecto.
Accusamus quas tempora quo saepe ipsam aut optio?`;

// console.log(complexBacktick);

const rezaName = "Reza";
const rezaJob = "Binar's Facilitator";
const reza = {
  name: "Reza",
  age: 25,
  job: "Binar's Facilitator",
};
const describeReza =
  "That person is " + rezaName + " and his job is " + rezaJob;
console.log(describeReza);

const shortDescibeReza = `That person is ${reza.name}, ${reza.age} years old and his job is ${reza.job}`;
console.log(shortDescibeReza);
