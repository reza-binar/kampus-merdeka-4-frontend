const fs = require("fs");

// Read the data1 with sync process
const data1 = fs.readFileSync("./data/data1.json", "utf-8");
console.log(data1);

const data2 = fs.readFileSync("./data/data2.json", "utf-8");
console.log(data2);
