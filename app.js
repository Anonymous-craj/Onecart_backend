import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

let app = express();
let port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/", authRoutes);

app.listen(port, () => {
  console.log("Server has started at port:", port);
  connectDB();
});
