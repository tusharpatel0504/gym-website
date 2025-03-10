// import express from "express";
// import { isAdmin, isAuth } from "../middlewares/isAuth.js";
// import {
//   addLectures,
//   createCourse,
//   deleteCourse,
//   deleteLecture,
//   getAllStats,
//   getAllUser,
//   updateRole,
//   updateCourse, 
//   getCourseById,
// } from "../controllers/admin.js";

// import { uploadFiles,uploadImages } from "../middlewares/multer.js";

// const router = express.Router();

// router.post("/course/new", isAuth, isAdmin, uploadImages, createCourse);
// router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLectures);
// router.put("/course/:id", isAuth, isAdmin,uploadImages, updateCourse); // New route for editing courses
// router.delete("/course/:id", isAuth, isAdmin, deleteCourse);
// router.delete("/lecture/:id", isAuth, isAdmin, deleteLecture);
// router.get("/stats", isAuth, isAdmin, getAllStats);
// router.put("/user/:id", isAuth, updateRole);
// router.get("/users", isAuth, isAdmin, getAllUser);
// router.get("/course/:id", isAuth, isAdmin, getCourseById); // New route for fetching course by ID

// export default router;


// import express from "express";
// import { isAdmin, isAuth } from "../middlewares/isAuth.js";
// import {
//   addLectures,
//   createCourse,
//   deleteCourse,
//   deleteLecture,
//   getAllStats,
//   getAllUser,
//   updateRole,
//   updateCourse, // Import the new controller function
//   getCourseById, // Import the new controller function
// } from "../controllers/admin.js";

// import { uploadFiles, uploadImages } from "../middlewares/multer.js";

// const router = express.Router();

// router.post("/course/new", isAuth, isAdmin, uploadImages, createCourse);
// router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLectures);
// router.put("/course/:id", isAuth, isAdmin, uploadImages, updateCourse); // New route for editing courses
// router.delete("/course/:id", isAuth, isAdmin, deleteCourse);
// router.delete("/lecture/:id", isAuth, isAdmin, deleteLecture);
// router.get("/stats", isAuth, isAdmin, getAllStats);
// router.put("/user/:id", isAuth, updateRole);
// router.get("/users", isAuth, isAdmin, getAllUser);
// router.get("/course/:id", isAuth, isAdmin, getCourseById); // New route for fetching course by ID

// export default router;













// import express from "express";
// import { isAdmin, isAuth } from "../middlewares/isAuth.js";
// import {
//   addLectures,
//   createCourse,
//   deleteCourse,
//   deleteLecture,
//   getAllStats,
//   getAllUser,
//   updateRole,
//   updateCourse,
//   getCourseById,
// } from "../controllers/admin.js";
// import { uploadFiles, uploadImages } from "../middlewares/multer.js";
// import {getContactForms } from "../controllers/contact.js"; // Import the new controller functions

// const router = express.Router();

// router.post("/course/new", isAuth, isAdmin, uploadImages, createCourse);
// router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLectures);
// router.put("/course/:id", isAuth, isAdmin, uploadImages, updateCourse);
// router.delete("/course/:id", isAuth, isAdmin, deleteCourse);
// router.delete("/lecture/:id", isAuth, isAdmin, deleteLecture);
// router.get("/stats", isAuth, isAdmin, getAllStats);
// router.put("/user/:id", isAuth, updateRole);
// router.get("/users", isAuth, isAdmin, getAllUser);
// router.get("/course/:id", isAuth, isAdmin, getCourseById);

// router.get("/contact", isAuth, isAdmin, getContactForms); // Add the new route for fetching contact forms

// export default router;








import express from "express";
import { isAdmin, isAuth } from "../middlewares/isAuth.js";
import {
  addLectures,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllStats,
  getAllUser,
  updateRole,
  updateCourse,
  getCourseById,
  getContactForms,
} from "../controllers/admin.js";
import { uploadFiles, uploadImages } from "../middlewares/multer.js";


const router = express.Router();

router.post("/course/new", isAuth, isAdmin, uploadImages, createCourse);
router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLectures);
router.put("/course/:id", isAuth, isAdmin, uploadImages, updateCourse);
router.delete("/course/:id", isAuth, isAdmin, deleteCourse);
router.delete("/lecture/:id", isAuth, isAdmin, deleteLecture);
router.get("/stats", isAuth, isAdmin, getAllStats);
router.put("/user/:id", isAuth, updateRole);
router.get("/users", isAuth, isAdmin, getAllUser);
router.get("/course/:id", isAuth, isAdmin, getCourseById);

router.get("/contact", getContactForms); // Add the new route for fetching contact forms

export default router;