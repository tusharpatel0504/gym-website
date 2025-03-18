// import express from "express";
// import {
//   forgotPassword,
//   loginUser,
//   myProfile,
//   register,
//   resetPassword,
//   verifyUser,
// } from "../controllers/user.js";
// import { isAuth } from "../middlewares/isAuth.js";
// import { addProgress, getYourProgress } from "../controllers/course.js";
// import { submitContactForm} from "../controllers/contact.js"; // Import the new controller

// const router = express.Router();

// router.post("/user/register", register);
// router.post("/user/verify", verifyUser);
// router.post("/user/login", loginUser);
// router.get("/user/me", isAuth, myProfile);
// router.post("/user/forgot", forgotPassword);
// router.post("/user/reset", resetPassword);
// router.post("/user/progress", isAuth, addProgress);
// router.get("/user/progress", isAuth, getYourProgress);
// // router.post("/contact", submitContactForm); // Add the new route
// router.post("/user/contact", submitContactForm);


// export default router;




import express from "express";
import {
  forgotPassword,
  loginUser,
  myProfile,
  register,
  resetPassword,
  verifyUser,
  handleSendContactMail,
} from "../controllers/user.js";
import { isAuth } from "../middlewares/isAuth.js";
import { addProgress, getYourProgress } from "../controllers/course.js";
import { submitContactForm } from "../controllers/contact.js"; // Import the new controller

const router = express.Router();

router.post("/user/register", register);
router.post("/user/verify", verifyUser);
router.post("/user/login", loginUser);
router.get("/user/me", isAuth, myProfile);
router.post("/user/forgot", forgotPassword);
router.post("/user/reset", resetPassword);
router.post("/user/progress", isAuth, addProgress);
router.get("/user/progress", isAuth, getYourProgress);
router.post('/user/sendContactMail', handleSendContactMail);

router.post("/user/contact", submitContactForm); // Add the new route for submitting contact forms

export default router;