import mongoose, { Schema } from "mongoose";


const supplyChainSchema = new mongoose.Schema({
  title: String,
  description: String
});

const categoriesEnum = ["Electronics", "Clothing", "Food&Beverages", "Home", "Beauty", "Books", "Sports", "Toys"];

const productSchema = new Schema(
  {
    supplyChain: [supplyChainSchema],
    productImage: {
      type: String, 
      required: true,
    },
    certification: {
      type: String, 
      required: true,
    },
    productLink: { 
      type: String,
      required: true
    },
    supplier:{
      type: Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      
    },
    carbonFP: {
      type: Number,
      
    },
    averageRating: {
      type: Number,
      default: 0 // Default to 0
    },
    category: {
      type: String,
      enum: categoriesEnum,
    }
  },
  { timestamps: true }
);


export const Product = mongoose.model("Product", productSchema);
