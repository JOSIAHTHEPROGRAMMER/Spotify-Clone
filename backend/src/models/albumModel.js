import mongoose from "mongoose";

// Schema for song albums
const albumSchema = new mongoose.Schema({
  name: { type: String, required: true },     // Album name
  desc: { type: String, required: true },     // Short description
  bgColor: { type: String, required: true },  // Background color for UI
  image: { type: String, required: true },    // Album cover image URL/path
});

// Use existing model if it exists, else create a new one
const albumModel = mongoose.models.album || mongoose.model("album", albumSchema);

export default albumModel;
