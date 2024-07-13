import { v2 as cloudinary } from "cloudinary";
import albumModel from "../Models/AlbumModel.js";

const addAlbum = async (req, res) => {
  try {
    const { name, desc, bgColor } = req.body;
    const imageFile = req.file;
    const imageUploader = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const albumdata = {
      name,
      desc,
      bgColor,
      image: imageUploader.secure_url,
    };

    const newAlbum = new albumModel(albumdata);
    await newAlbum.save();

    res.status(201).json({
      success: true,
      message: "Album added successfully",
      data: newAlbum,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to add album",
    });
  }
};

const listAlbum = async (req, res) => {
  try {
    const listAlbum = await albumModel.find({});
    if (!listAlbum) {
      return res.status(404).json({
        success: false,
        message: "Album not found",
      });
    }

    res.json({
      success: true,
      message: "Album list",
      data: listAlbum,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get album list",
    });
  }
};

const removeAlbum = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Album id is required",
      });
    }

    const removeAlbum = await albumModel.findByIdAndDelete(id);
    if (!removeAlbum) {
      return res.status(404).json({
        success: false,
        message: "Album not found",
      });
    }

    res.json({
      success: true,
      message: "Album removed successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to remove album",
    });
  }
};

export { addAlbum, listAlbum, removeAlbum };
