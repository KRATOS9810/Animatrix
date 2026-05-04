import mongoose from "mongoose";

const { Schema } = mongoose;

const EpisodeSchema = new Schema({
  title: String,
  description: String,
  genre: String,
  thumbnail: String,
  videoPath: String,
  year: String,
});
