const express = require('express')

const route = express.Router();

route.get('/', (req, res) => {
    res.status(200).json({data: 'Get All departments'})
})

route.get("/:id", (req, res) => {
  res.status(200).json({ data: "Get single department" });
});

route.post("/", (req, res) => {
  res.status(200).json({ data: "Add department" });
});

route.put("/:id", (req, res) => {
  res.status(200).json({ data: "Update department" });
});

route.delete("/:id", (req, res) => {
  res.status(200).json({ data: "Delete department" });
});

module.exports = route;