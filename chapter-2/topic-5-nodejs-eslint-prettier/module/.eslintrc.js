module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    eqeqeq: "off",
    curly: "error",
    quotes: ["error", "double"],
  },
};
