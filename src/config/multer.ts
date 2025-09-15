import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "./cloudinary";


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "user-api", // Folder in your Cloudinary account
      allowed_formats: ["jpg", "png", "jpeg"], // Allowed file types
      // optionally:
      public_id: file.originalname.split('.')[0], // Use original file name without extension as public_id
    } as any;
  },
});

const upload = multer({ storage: storage });

export default upload;
