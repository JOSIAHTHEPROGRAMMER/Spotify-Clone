import express from 'express';
import upload from "../middleware/multer.js";
import { addAlbum, listAlbum, removeAlbum } from "../controllers/albumController.js";

const albumRouter = express.Router();

// Add a new album with image upload
albumRouter.post('/add', upload.single("image"), addAlbum);

// Remove an album by ID (sent in req.body.id)
albumRouter.post('/remove', upload.none(), removeAlbum);

// List all albums
albumRouter.get('/list', listAlbum);

export default albumRouter;

