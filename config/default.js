const bunyan = require("bunyan");

module.exports = {
  app: {
    name: "api"
  },
  server: {
    port: 3000
  },
  log: {
    level: bunyan.DEBUG
  }
};
