const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/routes");

const Port = 3000;

const app = express();

mongoose
  .connect("mongodb://localhost:27017/classProject")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(express.json());
app.use("/auth", router);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
