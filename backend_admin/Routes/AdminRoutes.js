import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  res.status(200).json({ message: "Get All Admin" });
});

route.post("/login", (req, res) => {
  res.status(200).json({ message: "login Admin" });
});

route.post("/register", (req, res) => {
  res.status(200).json({ message: "register Admin" });
});

export default route;
