const fs = require("fs");

// Async callback
fs.readFile("./data/data1.json", "utf-8", (err, data1) => {
  if (err) {
    throw err;
  }
  console.log(data1);

  fs.readFile("./data/data2.json", "utf-8", (err, data2) => {
    if (err) {
      throw err;
    }
    console.log(data2);
  });
});

setTimeout(() => {
  console.log("aku dua detik");
}, 2000);

setTimeout(() => {
  console.log("aku satu detik");
}, 1000);
