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
      audio: audioUpload.secure_url,
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
        
    } catch (error) {
        
    }
};

export { Addsongs, ListSongs };
