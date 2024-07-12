import express from 'express';
import { Addsongs, ListSongs } from '../Controllers/Songcontroller.js';
import upload from '../Multer.js/Multer.js';

const RouteSongs = express.Router();

// Route to add a song with file uploads (image and audio)
RouteSongs.post(
  '/addsong',
  upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]),
  Addsongs
);

// Route to list songs
RouteSongs.get('/listsong', ListSongs);

export default RouteSongs;
