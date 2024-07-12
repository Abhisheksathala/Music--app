import express from 'express';
import { Addsongs, ListSongs ,removeSong} from '../Controllers/Songcontroller.js';
import upload from '../Multer.js/Multer.js';

const RouteSongs = express.Router();

// Route to add a song with file uploads (image and audio)
RouteSongs.post(
  '/addsong',
  upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]),
  Addsongs
);

RouteSongs.get('/listsong', ListSongs);
// Route to remove a song by ID
RouteSongs.post('/remove', removeSong);

export default RouteSongs;
