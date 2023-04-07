const axios = require("axios");

// Async Await
async function noPromiseAll() {
  try {
    const start = process.hrtime();

    let usersConfig = {
      method: "get",
      url: "https://reqres.in/api/users",
    };
    let singleUserConfig = {
      method: "get",
      url: "https://reqres.in/api/users/1",
    };
    let resourcesConfig = {
      method: "get",
      url: "https://reqres.in/api/unknow",
    };
    let singleResourceConfig = {
      method: "get",
      url: "https://reqres.in/api/unknow/1",
    };

    const userResponse = await axios.request(usersConfig); // Wait for the process done -- 1
    const resourcesResponse = await axios.request(resourcesConfig); // Wait for the process done -- 2
    const singleUserResponse = await axios.request(singleUserConfig);
    const singleResourceResponse = await axios.request(singleResourceConfig);

    const data = {
      users: userResponse.data,
      resources: resourcesResponse.data,
      singleUser: singleUserResponse.data,
      singleResourse: singleResourceResponse.data,
    };
    // console.log(data);

    const result = process.hrtime(start);
    console.log(`time execution (no promise all): ${result}`);

    return result;
  } catch (error) {
    throw error;
  }
}

async function withPromiseAll() {
  try {
    const start = process.hrtime();

    let usersConfig = {
      method: "get",
      url: "https://reqres.in/api/users",
    };
    let singleUserConfig = {
      method: "get",
      url: "https://reqres.in/api/users/1",
    };
    let resourcesConfig = {
      method: "get",
      url: "https://reqres.in/api/unknow",
    };
    let singleResourceConfig = {
      method: "get",
      url: "https://reqres.in/api/unknow/1",
    };

    const [
      userResponse,
      resourcesResponse,
      singleUserResponse,
      singleResourceResponse,
    ] = await Promise.all([
      axios.request(usersConfig),
      axios.request(resourcesConfig),
      axios.request(singleUserConfig),
      axios.request(singleResourceConfig),
    ]); // just wait here

    const data = {
      users: userResponse.data,
      resources: resourcesResponse.data,
      singleUser: singleUserResponse.data,
      singleResourse: singleResourceResponse.data,
    };

    // console.log(data);

    const result = process.hrtime(start);
    console.log(`time execution (promise all): ${result}`);

    return result;
  } catch (error) {
    throw error;
  }
}

(async () => {
  const [noPromiseTime, withpromiseTime] = await Promise.all([
    noPromiseAll(),
    withPromiseAll(),
  ]);

  console.log(
    `is promise all faster than no promise is ${
      withpromiseTime < noPromiseTime
    }`
  );
})();
