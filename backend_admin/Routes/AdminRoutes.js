import express from "express";
import { getAllAdmins, registerAdmin, loginAdmin} from  '../controller/AdminController.js'
const route = express.Router();

route.get("/", getAllAdmins);

route.post("/login", loginAdmin);

route.post("/register", registerAdmin);

export default route;
