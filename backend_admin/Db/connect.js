import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL || "mongodb://127.0.0.1:27017/admin123"
    ),
      { useNewUrlParser: true };
    console.log("Database connected");
  } catch (error) {
    console.log(error, "Something went wrong, while connecting database");
  }
};

export default connect;
