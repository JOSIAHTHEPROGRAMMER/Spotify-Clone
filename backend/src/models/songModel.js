import mongoose from "mongoose";

// Schema for uploaded songs
const songSchema = new mongoose.Schema({
  name: { type: String, required: true },      // Song title
  desc: { type: String, required: true },      // Song description
  album: { type: String, required: true },     // Album name or ID
  image: { type: String, required: true },     // Song cover image URL/path
  file: { type: String, required: true },     // Song cover URL/path
  duration: { type: String, required: true },  // Length of song (e.g., "3:45")
});

// Use existing model if available, else create a new one
const songModel = mongoose.models.song || mongoose.model("song", songSchema);

export default songModel;
