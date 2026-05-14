import { Router } from "express";
const route = Router();
import multer from "multer";
import upload from "../middleware/index.mul.js";
import Episode from "../models/Episode.js";
import TitleCard from "../models/TItlecard.js";
import cloudinary from "../middleware/index.cloudnary.js";
import streamifier from "streamifier";

route.get("/hi", (req, res) => {
  res.status(200).json({ message: "Hi" });
});

const uploadToCloudinary = (fileBuffer, folder, resourceType) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      },
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

route.post("/uploadtitle", upload.single("cover"), async (req, res) => {
  const { title, description, genre, year } = req.body;

  try {
    const coverUpload = await uploadToCloudinary(
      req.file.buffer,
      "anime/covers",
      "image",
    );

    const newTitleCard = new TitleCard({
      title,
      description,
      genre,
      year,
      coverImage: coverUpload.secure_url,
    });
    await newTitleCard.save();

    res.json({
      message: "Card created",
      data: newTitleCard,
    });
  } catch (error) {
    res.status(500).json({ error: error.message }, console.log(error));
  }
});
route.post("/upload/:id", upload.single("video"), async (req, res) => {
  try {
    const videoUpload = await uploadToCloudinary(
      req.file.buffer,
      "anime/videos",
      "video",
    );
    const newVideo = new Episode({
      titleId: req.params.id,
      title: req.body.title,
      episodeNumber: req.body.episodeNumber,
      videoUrl: videoUpload.secure_url,
    });
    await newVideo.save();

    res.json({
      message: "Uploaded",
    });
  } catch (error) {
    res.status(500).json({ error: error.message }, console.log(error));
  }
});

route.get("/all", async (req, res) => {
  try {
    const allepi = await TitleCard.find();
    res.status(200).json(allepi);
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
});

route.delete("/delete/:id", async (req, res) => {
  try {
    const delEpisode = await TitleCard.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Episode delted", delEpisode });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
});

route.get("/episodes/:id", async (req, res) => {
  try {
    const episodes = await Episode.find({
      titleId: req.params.id,
    });
    res.json(episodes);
  } catch (error) {
    res.status(400).json({ message: "Error", error }, console.log(error));
  }
});

route.get("/episodes", async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.json(episodes);
  } catch (error) {
    res.status(400).json({ message: "Error", error }, console.log(error));
  }
});

route.get("/gettitles", async (req, res) => {
  const search = req.query.search || "";

  const data = await TitleCard.find({
    title: { $regex: search, $options: "i" },
  });

  res.json(data);
});

export default route;
