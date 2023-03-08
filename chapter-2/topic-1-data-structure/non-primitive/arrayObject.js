const peopleInClass = [
  {
    id: 1,
    name: "Yayan Suryana",
    nickName: "Yayan",
    age: 20,
    address: {
      city: "Cilacap",
      province: "Central Java",
      postalCode: "12345",
      country: "Indonesia",
    },
    school: {
      undergraduate: "Telkom Purwokerto",
    },
    identity: {
      "family Number": 123456789,
    },
  },
  {
    id: 2,
    name: "Ricky Ega",
    nickName: "Ricky",
    age: 21,
    address: {
      city: "Banyuwangi",
      province: "East Java",
      postalCode: "123444",
      country: "Indonesia",
    },
    school: {
      undergraduate: "Universitas Jember",
    },
    identity: {
      "family Number": 123456780,
    },
  },
];

// His name is Ricky Ega and he usually is called Ricky.
const numberOneQuestion = `His name is ${peopleInClass[1].name} and he usually is called ${peopleInClass[1].nickName}.`;
console.log(numberOneQuestion);
// His name is Ricky Ega, he usually is called Ricky, live in Banyuwangi and his family number is 123456780.
const numberTwoQuestion = `His name is ${peopleInClass[1].name}, he usually is called ${peopleInClass[1].nickName}, live in ${peopleInClass[1].address.city} and his family number is ${peopleInClass[1].identity["family Number"]}.`;
console.log(numberTwoQuestion);
// Ricky and Yayan is my friends. They are students of the universities in Indonesia. Yayan study in Telkom Purwokerto and Ricky study in Universitas Jember. Ricky is from Banyuwangi, East Java and Yayan is from Cilacap, Central Java.
const numberThreeQuestion = `${peopleInClass[1].nickName} and ${peopleInClass[0].name} is my friends. They are students of the universities in ${peopleInClass[0].address.country}. ${peopleInClass[1].nickName} study in ${peopleInClass[1].school.undergraduate} and ${peopleInClass[0].nickName} study in ${peopleInClass[0].school.undergraduate}. ${peopleInClass[1].nickName} is from ${peopleInClass[1].address.city}, ${peopleInClass[1].address.province} and ${peopleInClass[0].nickName} is from ${peopleInClass[0].address.city}, ${peopleInClass[0].address.province}.`;
console.log(numberThreeQuestion);
