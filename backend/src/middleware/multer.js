import multer from 'multer';

// Configure storage settings (only setting filename here)
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname); // Keep original file name
  }
});

// Initialize multer with the storage config
const upload = multer({ storage });

export default upload;
