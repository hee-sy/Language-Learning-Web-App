import express from "express";
// import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
import Users from "./models/User.js";

const app = express();

app.use(express.json()); // Middleware to parse JSON data

// Middleware to allow Cross-Origin Resource Sharing (CORS policy)
// Option 1: Allow all origins w default of "cors(*)"
app.use(cors());
// Optopn 2: Allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

const mongoDBURL = process.env.mongoDBURL;
const PORT = process.env.PORT;

app.use("/user", userRouter);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to my Language Learning MERN Web App :)");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
