import { Router } from "express";
import {uploadOnServer} from '../middlewares/multer.middleware.js'
import { verifySupplier } from "../middlewares/auth.middleware.js";
import { getSupplierData, loginSupplier, logoutSupplier, registerSupplier } from "../controllers/supplier.controllers.js";

const router = Router();


router.route("/register").post(
  uploadOnServer.fields([ //specify which fields to take as files from post request
    {
      name: "avatar",
      maxCount: 1
    },
    {
      name: "authCertification",
      maxCount: 1
    }
  ]),
  registerSupplier
)
router.route("/login").post(loginSupplier)



//Secured routes
router.route("/logout").get(verifySupplier,logoutSupplier);
router.route("/getuser").get(verifySupplier, getSupplierData);


export default router;