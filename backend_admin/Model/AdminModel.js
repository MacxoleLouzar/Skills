import mongoose from "mongoose";


const AdminModel = mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true },
  },
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Admins', AdminModel)