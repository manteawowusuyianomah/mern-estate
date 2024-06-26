import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
