const path = require("path");

const logging = (value) => (value === "true" ? console.log : false);

/** @type {Record<string, import('sequelize').Options>} */
module.exports = {
  development: {
    database: process.env.DEV_DB_NAME || "conduit_development",
    dialect: "sqlite",
    storage:
      process.env.DEV_DB_STORAGE || path.resolve(__dirname, "../database.sqlite"),
    logging: logging(process.env.DEV_DB_LOGGING),
  },
  test: {
    database: process.env.TEST_DB_NAME || "conduit_test",
    dialect: "sqlite",
    storage: process.env.TEST_DB_STORAGE || ":memory:",
    logging: logging(process.env.TEST_DB_LOGGING),
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: process.env.PROD_DB_DIALECT,
    logging: logging(process.env.PROD_DB_LOGGING),
  },
};
