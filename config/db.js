import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("DB connected!");
  } catch (error) {
    console.log("DB error");
  }
};

export default connectDB;
