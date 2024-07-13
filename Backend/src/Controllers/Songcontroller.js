import { v2 as cloudinary } from "cloudinary";
import songModel from "../Models/songModel.js";

const Addsongs = async (req, res) => {
  try {
    const { name, desc, album } = req.body;
    const imageFile = req.files.image[0];
    const audioFile = req.files.audio[0];

    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
      audioUpload.duration % 60
    )}`;

    const songdata = {
      name,
      desc,
      album,
      file: audioUpload.secure_url,
      image: imageUpload.secure_url,
      duration,
    };

    const newSong = new songModel(songdata);

    await newSong.save();
    res.status(201).json({ success: true, message: "song added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
};

const ListSongs = async (req, res) => {
  try {
    const Allsongs = await songModel.find({});

    if (!Allsongs) {
      return res
        .status(404)
        .json({ success: false, message: "No songs found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "All songs", data: Allsongs });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      error: error.message,
    });
  }
};

//remove song by the id

const removeSong = async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id) {
       res.status(400).json({
        success: false,
        message: "Missing song ID in request body",
      });
    }

    const song = await songModel.findByIdAndDelete(_id);

    if (!song) {
      return res
        .status(404)
        .json({ success: false, message: "song not found" });
    }

    return res.status(201).json({
      success: true,
      message: "song removed successfully",
      data: song,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error.message,
    });
  }
};




export { Addsongs, ListSongs, removeSong };
