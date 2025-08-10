import { addSong, listSong, removeSong } from "../controllers/songController.js";
import express from 'express';
import upload from "../middleware/multer.js";

const songRouter = express.Router();

// Add a new song (with image & audio uploads)
songRouter.post(
  '/add',
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 }
  ]),
  addSong
);

// Remove a song by ID 
songRouter.post('/remove', upload.none(), removeSong);

// Get list of all songs
songRouter.get('/list', listSong);

export default songRouter;
