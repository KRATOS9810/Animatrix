import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function db() {
  try {
    mongoose.connect(process.env.MOGNO_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log("Error occured", error);
  }
}

export default db;
