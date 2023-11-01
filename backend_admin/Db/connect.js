import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL ||
        "mongodb+srv://admin:P123456789@cluster0.ifm4oar.mongodb.net/"
    ),
      { useNewUrlParser: true };
    console.log("Database connected");
  } catch (error) {
    console.log(error, "Something went wrong, while connecting database");
  }
};

export default connect;
                   