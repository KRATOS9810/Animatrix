import mongoose from "mongoose";
const { Schema } = mongoose;

const TitleCardSchema = new Schema({
  title: String,
  description: String,
  coverImage: String,
  genre: [String],
  year: Number,
});

const TitleCard = mongoose.model("TitleCard", TitleCardSchema);

export default TitleCard;
