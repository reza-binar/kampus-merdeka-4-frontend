const people = [
  {
    firstName: "Daniel",
    lastName: "Simanjuntak",
    id: 1234,
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
  },
  {
    firstName: "Victor",
    lastName: "Sirait",
    id: 1234,
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
];

console.log(people[0].getFullName());

people?.map((person) => {
  console.log(person.getFullName());
});
