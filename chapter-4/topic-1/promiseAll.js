const axios = require("axios");

// Async Await
async function noPromiseAll() {
  try {
    const start = process.hrtime();

    let usersConfig = {
      method: "get",
      url: "https://reqres.in/api/users",
    };
    let resourcesConfig = {
      method: "get",
      url: "https://reqres.in/api/unknow",
    };

    const userResponse = await axios.request(usersConfig); // Wait for the process done
    const resourcesResponse = await axios.request(resourcesConfig); // Wait for the process done

    const data = {
      users: userResponse.data,
      resources: resourcesResponse.data,
    };
    // console.log(data);

    const result = process.hrtime(start);
    console.log(`time execution (no promise all): ${result}`);
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
    let resourcesConfig = {
      method: "get",
      url: "https://reqres.in/api/unknow",
    };

    const [userResponse, resourcesResponse] = await Promise.all([
      axios.request(usersConfig),
      axios.request(resourcesConfig),
    ]); // just wait here

    const data = {
      users: userResponse.data,
      resources: resourcesResponse.data,
    };

    // console.log(data);

    const result = process.hrtime(start);
    console.log(`time execution (promise all): ${result}`);
  } catch (error) {
    throw error;
  }
}

noPromiseAll();
withPromiseAll();
