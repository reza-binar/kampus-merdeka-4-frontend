/* Scope */
var discount = 500; // Global scope
if (true) {
  var discount = 300; // Global scope
}
console.log(discount); // Output: 300 karena global scope

var discount = 500; // Global scope
function discountScope() {
  var discount = 300; // Local scope
  console.log(discount);
}
discountScope(); // Output: 300
console.log(discount); // Output: 500

/* Reassigned & Redeclared */
var name; // Declaration
console.log(name);

name = "Bot"; // Assignment
console.log(name);

var name = "Bot Sabrina"; // Redeclared & Reassigned
console.log(name);

/* Hoisting */
name = "Mentor Sabrina";
var name;
console.log(name);

// In the background (hoisting)
var name;
name = "Mentor Sabrina";
console.log(name);
