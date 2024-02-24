import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";  
import {ApiResponse} from "../utils/ApiResponse.js"
import { Review } from "../models/review.model.js";

const addReview = asyncHandler(async(req,res)=>{  
  const { user, product, comment, rating } = req.body;
  const review = await Review.create({ user, product, comment, rating });

  if(!review) 
  {
      throw new ApiError(500,"something went wrong while creating the Review")
  }
  await review.save();

  return res
  .status(200)
  .json(new ApiResponse(200, review, "Comment posted successfully"))
})


  const getReviewsForProduct = asyncHandler(async (req, res) => {
  try
  {
    const productId = req.params.productId;
    const reviews = await Review.find({ product: productId }).populate('user').populate('product');
    console.log(reviews);
    res.status(200).json({ success: true, reviews });
  }
  catch (error)
  {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Controller function to fetch all reviews by a particular user
  const getReviewsByUser = asyncHandler(async (req, res) => {
  try
  {
    const userId = req.params.userId;
    const reviews = await Review.find({ user: userId }).populate('user').populate('product');
    res.status(200).json({ success: true, reviews });
  }
  catch (error)
  {
    res.status(400).json({ success: false, error: error.message });
  }
});

export {
  addReview,
  getReviewsForProduct,
  getReviewsByUser
}