import { Router } from "express";
import {
  addReview,
  getReviewsForProduct,
  getReviewsByUser
} from "../controllers/review.controllers.js";

const router = Router();

router.route("/add").post(addReview);
router.route("/getByUserId/:userId").get(getReviewsByUser);
router.route("/getByProductId/:productId").get(getReviewsForProduct);


export default router;