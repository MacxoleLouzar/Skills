const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
    res.json({message: "All Employees"})
});

route.get("/:id", (req, res) => {
  res.json({ message: "Get One Employee" });
});

route.post("/", (req, res) => {
  res.json({ message: "Add Employees" });
});

route.put("/:id", (req, res) => {
  res.json({ message: "Update Employees" });
});

route.delete("/:id", (req, res) => {
  res.json({ message: "Delete Employees" });
});

module.exports = route;
