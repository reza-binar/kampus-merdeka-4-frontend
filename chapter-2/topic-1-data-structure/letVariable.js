// let message = "Hello World";
// console.log(message);

// let name = "Sabrina",
//   age = 25,
//   gender = "female";

// long version
// let name = "Sabrina";
// let age = 25;
// let gender = "female";

// console.log(name, age, gender);

/* Scope */
let discount = 500; // Global scope
if (true) {
  let discount = 300; // Local scope
  console.log(discount);
}
console.log(discount);

/* Redeclared & Reassigned */
let name;
console.log(name);
name = "Sabrina";
console.log(name);
name = "Bot Sabrina";
console.log(name);
// let name = "Mentor Sabrina";
// console.log(name);
