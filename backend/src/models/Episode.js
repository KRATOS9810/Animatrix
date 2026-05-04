import mongoose from "mongoose";

const { Schema } = mongoose;

const EpisodeSchema = new Schema({
  titleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TitleCard",
  },
  title: String,
  episodeNumber: Number,
  videoUrl: String,
});

const Episode = mongoose.model("Episode", EpisodeSchema);

export default Episode;
