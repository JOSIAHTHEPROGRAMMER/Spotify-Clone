import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";


const addSong = async (req,res) =>{
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audioFile = req.files.audio[0]
        const imageFile = req.files.image[0]
        

        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type:"video"})
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`
       //

        const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioFile.secure_url,
            duration
        }

        const song = songModel(songData);
        await song.save();

        res.json({success:true,message:"Song Added"})
    } catch (error) {
        res.json({success:false,message:error.message})

    }
}

const listSong = async (req,res) => {
    try {
        const music = await songModel.find({});

        res.json({success:true, music: music});
        
    } catch (error) {
            res.status(500).json({ success: false, message: error.message });

    }
}

const removeSong = async (req, res) => {
  try {
    const id = req.body.id;
    if (!id) {
      return res.status(400).json({ success: false, message: "Missing song id" });
    }

    const deleted = await songModel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Song not found" });
    }

    res.json({ success: true, message: "Song removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export {addSong, listSong, removeSong}