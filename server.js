import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/db.js";
import { User } from "./models/userModel.js";

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Data fetched successfully",
  });
});

app.post("/add-user", async (req, res) => {
  const { firstname, lastname } = req.body;

  const user = await User.create({
    firstname,
    lastname,
  });

  await user.save();

  res.status(200).json({
    success: true,
    message: "User added successfully...",
  });
});

app.get("/get-users", async (req, res) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    message: "Data fetched successfully",
    data: users,
  });
});

app.get("/dummy",(req,res)=>{
  res.send("Hello Dummy World")
})

app.listen(process.env.PORT, () => {
  console.log("app running "+process.env.PORT);
});
