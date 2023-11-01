const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.json({message: "Get All Roles"})
});

route.get("/:id", (req, res) => {
  res.json({ message: "Get Single Roles" });
});

route.post("/", (req, res) => {
  res.json({ message: "Add Roles" });
});

route.put("/:id", (req, res) => {
  res.json({ message: "Update Roles" });
});

route.delete("/:id", (req, res) => {
  res.json({ message: "Delete Roles" });
});

module.exports = route;
