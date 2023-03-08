const jsonData = {
  result: [
    {
      name: "Reza",
      age: 21,
    },
    {
      name: "Reza",
      occupation: "Software Engineer",
    },
    {
      name: "Syahdan",
      city: "Tangerang",
    },
    {
      nama: "Ikromi",
      occupation: "Student",
    },
  ],
};

function filterByGroup(key) {
  // Code here
}

filterByGroup("name");
/* 
  {
    "Reza": { age: 21, occupation: "Software Engineer" },
    "Syahdan": { city: Tangerang }
  }
*/

filterByGroup("nama");
/* 
  {
    "Ikromi": { occupation: "Student" }
  }
*/

filterByGroup("occupation");
/* 
  {
    "Software Engineer": { name: "Reza" },
    "Student": { nama: "Ikromi" }
  }
*/
