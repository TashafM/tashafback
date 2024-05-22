import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    console.log("connected successfully!!!");
  } catch (error) {
    console.log(error);
  }
};

