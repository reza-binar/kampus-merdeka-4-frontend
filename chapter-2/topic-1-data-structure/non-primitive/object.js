const personOne = {
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
};

// Call the value of specific key
const describePersonOne = `His name is ${personOne.name}, ${personOne.age} years old, ${personOne.nickName} is a student of ${personOne.school.undergraduate}, and ${personOne.nickName} is from ${personOne.address.city}.`;
console.log(describePersonOne);

const describePersonOneIdentity = `${personOne.nickName}'s family number is ${personOne.identity["family Number"]}`;
console.log(describePersonOneIdentity);
