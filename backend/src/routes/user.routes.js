import { Router } from "express";
import {uploadOnServer} from '../middlewares/multer.middleware.js'
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getUserData, loginUser, logoutUser, registerUser } from "../controllers/user.controllers.js";

const router = Router();

router.route("/register").post(
  uploadOnServer.single("avatar"),
  registerUser
)
router.route("/login").post(loginUser)


//Secured routes
router.route("/logout").get(verifyJWT,logoutUser);
router.route("/getuser").get(verifyJWT, getUserData);


export default router;