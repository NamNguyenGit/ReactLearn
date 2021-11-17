require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
// const URL = 'mongodb+srv://mongo-user:<password>@cluster-mongo-test.ieqay.mongodb.net/myFirstDatabase?retryWrites=true&w=majoritys '
// const URL =
//   "mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@shophair.akemf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());
app.use("/api/auth", authRoute);

const PORT = process.env.APP_PORT;
app.listen(PORT, () => console.log("Server run"));
