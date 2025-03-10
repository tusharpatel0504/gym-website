import multer from "multer";
import { v4 as uuid } from "uuid";
import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
import { Readable } from "stream";

dotenv.config();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up Cloudinary storage for multer (for images only)
const storage_Img = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: (req, file) => {
    const extName = file.originalname.split(".").pop(); // Get file extension
    const fileName = `${uuid()}.${extName}`; // Generate unique filename

    return {
      folder: "gym-course-images", // Folder in Cloudinary where images will be stored
      resource_type: "image", // Specify resource type as image
      public_id: fileName, // Use the generated filename as the public ID
    };
  },
});

// File filter to limit formats to png, jpeg, jpg
const file_Filter = (req, file, cb) => {
  const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only png, jpeg, and jpg are allowed."), false);
  }
};

// Export the multer middleware for image uploads
export const uploadImages = multer({ storage: storage_Img, fileFilter: file_Filter }).single("file");

// Custom storage engine for Multer with progress tracking
const storage = {
  _handleFile(req, file, cb) {
    const extName = file.originalname.split(".").pop(); // Get file extension
    const fileName = `${uuid()}.${extName}`; // Generate unique filename

    // Track upload progress
    let totalBytes = file.size; // Total file size
    let uploadedBytes = 0;

    // Create a readable stream from the file buffer
    const stream = Readable.from(file.stream);

    // Use upload_stream for streaming uploads
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      {
        resource_type: "video",
        folder: "gym-course-videos",
        public_id: fileName,
      },
      (error, result) => {
        if (error) {
          return cb(error);
        }
        cb(null, {
          path: result.secure_url,
          filename: result.public_id,
        });
      }
    );

    // Track progress
    stream.on("data", (chunk) => {
      uploadedBytes += chunk.length;
      const progress = Math.round((uploadedBytes / totalBytes) * 100);
      // console.log(`Upload progress: ${progress}%`);
      req.uploadProgress = progress; // Attach progress to the request object
    });

    stream.on("end", () => {
      console.log("Upload complete!");
    });

    // Pipe the file stream to the Cloudinary upload stream
    stream.pipe(uploadStream);
  },
  _removeFile(req, file, cb) {
    cloudinary.v2.uploader.destroy(file.filename, { resource_type: "video" }, cb);
  },
};

// File filter to limit formats to mp4, png, jpeg, jpg
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["video/mp4", "image/png", "image/jpeg", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only mp4, png, jpeg, and jpg are allowed."), false);
  }
};

// Export the multer middleware with custom storage and file filter
export const uploadFiles = multer({ storage, fileFilter }).single("file");