const responseData = {
  statusCode: 200,
  status: "OK",
  data: [
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
  ],
};

if (responseData.statusCode < 200 || responseData.statusCode >= 300) {
  console.error("Error");
}

// map like for
const newArray = responseData?.data?.map((person) => {
  return {
    ...person,
    isStudent: true,
  };
});

console.log("add isStudent", newArray);

// filter array example
const filteredArray = responseData?.data?.filter((person) => {
  return person.address.city === "Cilacap";
});

console.log("yayan: ", filteredArray);

// with for
// for (let index = 0; index < responseData?.data?.length; index++) {
//   const element = responseData?.data[index];

//   if (element.age === 21) {
//     console.log(element);
//   }
// }

// // what is ?
// const objectAsk = {
//   data: [
//     {
//       id: 1,
//       name: "Syahdan",
//     },
//     {
//       id: 2,
//       name: "Atilla",
//       address: {
//         city: "Tangerang",
//       },
//     },
//   ],
// };

// console.log(objectAsk?.data[0]?.address?.city);

// if (objectAsk) {
//   if (objectAsk?.data[0]) {
//     if (objectAsk?.data[0]?.address) {
//       if (objectAsk?.data[0]?.address?.city) {
//         console.log(objectAsk?.data[0]?.address?.city);
//       }
//     }
//   }
// }
