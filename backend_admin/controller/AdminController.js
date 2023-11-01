import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AdminModel from "../Model/AdminModel.js";

const getAllAdmins = async (req, res) => {
  try {
    const admins = await AdminModel.find();
    res.status(200).json({ data: admins });
  } catch (error) {
    res
      .status(500)
      .json({ error, message: "something went wrong try again later" });
  }
};

const registerAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.json({ error: "All fields are required" });
    }

    const admin = await AdminModel.findOne({ email });
    if (admin) {
      return res.json({ error: "User already exist" });
    }

    const hashpassword = await bcrypt.hash(password, 15);
    const AddUser = await AdminModel({
      username,
      email,
      password: hashpassword,
    });
    await AddUser.save();
    res.json({ data: "Admin User registered" });
  } catch (error) {
    res
      .status(500)
      .json({ error: error, message: "Something went wrong, try again later" });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const {email, password } = req.body;
    if (!email | !password) {
      return res.json({ error: "All fields are required" });
    }

    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.json({ error: "User does not exist" });
    }

    const comparePassword = await bcrypt.compare(password, admin.password);
    if (!comparePassword) {
      return res.json({ error: "Password incorrect" });
    }

    const token = await jwt.sign(
      {
        _id: admin._id,
        username: admin.username,
        email: admin.email,
      },
      "" + process.env.JWT_KEY,
      { expiresIn: "1H" }
    );
    return res.json({
      token,
      _id: admin._id,
      username: admin.username,
      email: admin.email,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Something went wrong, try again later",
    });
  }
};

export { getAllAdmins, loginAdmin, registerAdmin };
