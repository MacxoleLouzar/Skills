import mongoose from "mongoose";


const AdminModel = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: password,
    required: true,
  },
});

export default mongoose.model('Admins', AdminModel)