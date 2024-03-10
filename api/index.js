import express from "express";
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}`);
});