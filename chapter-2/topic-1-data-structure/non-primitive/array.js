// Array always start with 0 index
const vegetables = [
  "apple",
  "orange",
  "mango",
  1,
  true,
  {
    name: "Reza",
    from: "Yogyakarta",
  },
];

let describeMango = `${vegetables[5].name} is one of the sweetest vegetables`;
console.log(describeMango);

vegetables.map((vegetable) => {
  console.log(`I have an ${vegetable}`);
});
