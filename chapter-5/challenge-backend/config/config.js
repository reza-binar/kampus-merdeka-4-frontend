require("dotenv").config();

const {
  DATABASE_URL,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_HOST,
} = process.env;

if (
  !DATABASE_URL ||
  !DATABASE_USERNAME ||
  !DATABASE_PASSWORD ||
  !DATABASE_NAME ||
  !DATABASE_HOST
) {
  throw new Error("Env is required");
}

module.exports = {
  development: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    use_env_variables: DATABASE_URL,
    dialect: "postgres",
  },
  test: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    use_env_variables: DATABASE_URL,
    dialect: "postgres",
  },
  production: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    use_env_variables: DATABASE_URL,
    dialect: "postgres",
  },
};
