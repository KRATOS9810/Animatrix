import express from "express";
import route from "./src/routes/index.routes.js";
import dotenv from "dotenv";
import db from "./src/Database/index.db.js";
import multer from "multer";
import path from "path";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use("/", route);
app.use(express.json());

app.use("/videos", express.static("uploads/videos"));
app.use("/covers", express.static("uploads/covers"));

db();

app.listen(port, () => {
  console.log("Listening");
});
