const express = require("express");
const {
  AddEmployeeCtrl,
  GetOneEmployeeCrl,
  GetEmployeesCtrl,
  UpdateEmployeeCTRL,
  DeleteEmployeeCTRL,
} = require("../Controller/EmployeeController");
const route = express.Router();

route.get("/", GetEmployeesCtrl);

route.get("/:id", GetOneEmployeeCrl);

route.post("/", AddEmployeeCtrl);

route.put("/:id", UpdateEmployeeCTRL);

route.delete("/:id", DeleteEmployeeCTRL);

module.exports = route;
