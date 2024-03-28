import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
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

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}`);
});

app.use("/api/user", userRouter);
