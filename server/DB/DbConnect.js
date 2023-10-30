const { Pool } = require("pg");

const connect = new Pool({
  user: "postgres",
  host: "localhost",
  database: "employeedb",
  password: "admin123",
  port: "5432",
});

connect
  .connect()
  .then((client) => {
    console.log("Db is connected");
  })
  .catch((error) => {
    console.log("Db not connect", error);
  });

module.exports = connect;
