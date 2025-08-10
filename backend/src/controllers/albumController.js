import { v2 as cloudinary } from "cloudinary";
import albumModel from '../models/albumModel.js'

// add album to database
export const addAlbum = async (req,res) =>{

    try {
      const name = req.body.name;
      const desc = req.body.desc;
      const bgColor = req.body.bgColor;
      const imageFile = req.file
      const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})


    const albumData = {
            name,
            desc,
            bgColor, 
            image: imageUpload.secure_url,
        }

        const album = albumModel(albumData);
        await album.save();

        res.json({success:true, message:"Album added successfully"})

    }catch(error){
     res.json({success:false, message:error.message})

    }


}

// List all albums
export const listAlbum = async (req, res) => {
  try {
    const albums = await albumModel.find();
    res.json({ success: true, albums });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Remove an album by ID
export const removeAlbum = async (req, res) => {
  try {
    const albumId = req.body.id;
    const album = await albumModel.findById(albumId);

    if (!album) {
      return res.status(404).json({ success: false, message: "Album not found" });
    }

    await albumModel.findByIdAndDelete(albumId);
    res.json({ success: true, message: "Album removed successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

