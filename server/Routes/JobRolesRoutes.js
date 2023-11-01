const express = require("express");
const {
  AddJobCtrl,
  GetJobCtrl,
  GetOneJobCrl,
  UpdateJobCTRL,
  DeleteJobCTRL,
} = require("../Controller/JobsController");
const route = express.Router();

route.get("/", GetJobCtrl);

route.get("/:id", GetOneJobCrl);

route.post("/", AddJobCtrl);

route.put("/:id", UpdateJobCTRL);

route.delete("/:id", DeleteJobCTRL);

module.exports = route;
