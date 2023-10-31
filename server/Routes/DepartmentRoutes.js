const express = require('express')
const {GetDepartmentsCtrl, AddDepartmentCtrl} = require('../Controller/DpartmentController')
const route = express.Router();

route.get('/', GetDepartmentsCtrl)

route.get("/:id", (req, res) => {
  res.status(200).json({ data: "Get single department" });
});

route.post("/", AddDepartmentCtrl);

route.put("/:id", (req, res) => {
  res.status(200).json({ data: "Update department" });
});

route.delete("/:id", (req, res) => {
  res.status(200).json({ data: "Delete department" });
});

module.exports = route;