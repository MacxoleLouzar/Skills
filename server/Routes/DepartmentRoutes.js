const express = require("express");
const {
  GetDepartmentsCtrl,
  AddDepartmentCtrl,
  GetOneDepartmentCrl,
  UpdateDepartmentCTRL,
  DeleteDepartmentCTRL,
} = require("../Controller/DpartmentController");
const route = express.Router();

route.get("/", GetDepartmentsCtrl);

route.get("/:id", GetOneDepartmentCrl);

route.post("/", AddDepartmentCtrl);

route.put("/:id", UpdateDepartmentCTRL);

route.delete("/:id", DeleteDepartmentCTRL);

module.exports = route;
