import TryCatch from "../middlewares/TryCatch.js";
import { Courses } from "../models/Courses.js";
import { Lecture } from "../models/Lecture.js";
import { rm } from "fs";
import { promisify } from "util";
import fs from "fs";
import { User } from "../models/User.js";
import cloudinary from "cloudinary";
import { Contact } from "../models/Contact.js";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const createCourse = TryCatch(async (req, res) => {
  const { title, description, category, createdBy, duration, price } = req.body;
  const image = req.file;

  await Courses.create({
    title,
    description,
    category,
    createdBy,
    image: image?.path,
    duration,
    price,
  });

  res.status(201).json({
    message: "Course Created Successfully",
  });
});

export const addLectures = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);

  if (!course) {
    return res.status(404).json({
      message: "No Course with this id",
    });
  }

  const { title, description } = req.body;
  const file = req.file;

  const lecture = await Lecture.create({
    title,
    description,
    video: file?.path,
    course: course._id,
  });

  res.status(201).json({
    message: "Lecture Added",
    lecture,
  });
});

export const deleteLecture = TryCatch(async (req, res) => {
  const lecture = await Lecture.findById(req.params.id);

  if (!lecture) {
    return res.status(404).json({ message: "Lecture not found" });
  }

  // Extract the public_id from the video URL
  const publicId = lecture.video.split("/").slice(-2).join("/").split(".")[0];

  // Delete the video from Cloudinary
  await cloudinary.v2.uploader.destroy(publicId, { resource_type: "video" });

  await lecture.deleteOne();

  res.json({ message: "Lecture Deleted" });
});

const unlinkAsync = promisify(fs.unlink);

export const deleteCourse = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  const lectures = await Lecture.find({ course: course._id });

  await Promise.all(
    lectures.map(async (lecture) => {
      // Extract the public_id from the video URL
      const publicId = lecture.video.split("/").pop().split(".")[0];

      // Delete the video from Cloudinary
      await cloudinary.v2.uploader.destroy(publicId, { resource_type: "video" });

      await lecture.deleteOne();
    })
  );

  // Extract the public_id from the image URL
  const imagePublicId = course.image.split("/").pop().split(".")[0];

  // Delete the course image from Cloudinary
  await cloudinary.v2.uploader.destroy(imagePublicId, { resource_type: "image" });

  await course.deleteOne();

  await User.updateMany({}, { $pull: { subscription: req.params.id } });

  res.json({
    message: "Course Deleted",
  });
});

export const getAllStats = TryCatch(async (req, res) => {
  const totalCourses = (await Courses.find()).length;
  const totalLectures = (await Lecture.find()).length;
  const totalUsers = (await User.find()).length;

  const stats = {
    totalCourses,
    totalLectures,
    totalUsers,
  };

  res.json({
    stats,
  });
});

export const getAllUser = TryCatch(async (req, res) => {
  const users = await User.find({ _id: { $ne: req.user._id } }).select("-password");

  res.json({ users });
});

export const updateRole = TryCatch(async (req, res) => {
  if (req.user.mainrole !== "superadmin") {
    return res.status(403).json({
      message: "This endpoint is assigned to superadmin",
    });
  }

  const user = await User.findById(req.params.id);

  if (user.role === "user") {
    user.role = "admin";
    await user.save();

    return res.status(200).json({
      message: "Role updated to admin",
    });
  }

  if (user.role === "admin") {
    user.role = "user";
    await user.save();

    return res.status(200).json({
      message: "Role updated to user",
    });
  }
});


export const getCourseById = TryCatch(async (req, res) => {
  console.log(req.params.id);
  const course = await Courses.findById(req.params.id);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.status(200).json(course);
});



export const updateCourse = TryCatch(async (req, res) => {
  const { id } = req.params;
  const { title, description, price, duration, category, createdBy } = req.body;
  const image = req.file;

  const course = await Courses.findById(id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  course.title = title || course.title;
  course.description = description || course.description;
  course.price = price || course.price;
  course.duration = duration || course.duration;
  course.category = category || course.category;
  course.createdBy = createdBy || course.createdBy;

  if (image) {
    // Extract the public_id from the existing image URL
    const imagePublicId = course.image.split("/").pop().split(".")[0];

    // Delete the existing image from Cloudinary
    await cloudinary.v2.uploader.destroy(imagePublicId, { resource_type: "image" });

    // Update the course image with the new image path
    course.image = image.path;
  }

  await course.save();

  res.status(200).json({ message: "Course updated successfully", course });
});


export const getContactForms = async (req, res) => {
  // if (user.role === "admin"){

  // console.log("Ayaz");
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      console.log("Abhyay", contacts);
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({
         message: "Unable to get contact details", 
        });
    }
  // }
  
};