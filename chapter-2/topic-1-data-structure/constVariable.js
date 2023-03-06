/* Scope */
const discount = 500; // Global
if (true) {
  const discount = 300; // Local
  console.log(discount);
}
console.log(discount);

/* Reassigned & Redeclared */
const earth = "bulat";
// earth = "datar"; // const can not be reassigned
// const earth = datar; // const can not be redeclare

/* But const can be reassigned in object/array */
const obj = { id: 1, name: "Sabrina" };
obj.location = "Jakarta";
console.log(obj);
// obj = { id: 2, name: "Reza" }; // Error, can not reassigned like this

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
// arr = []; // Error, can not reassigned like this
