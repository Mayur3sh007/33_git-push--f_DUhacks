import mongoose, { Schema } from "mongoose";
import { Product } from "./product.model";
import { User } from "./user.model";

const reviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: User, 
      required: true
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: Product, 
      required: true
    },
    comment:{
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

reviewSchema.post(["save", "updateOne", "deleteOne"], async function(doc, next) {

  // const product = await Product.findById(doc.product);

  const reviews = await Review.find({ product: doc.product });

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);

  const averageRating = totalRating / reviews.length || 0; // Avoid division by zero

  await Product.findByIdAndUpdate(doc.product, { averageRating });
  next();
});

export const Review = mongoose.model("Review", reviewSchema);
