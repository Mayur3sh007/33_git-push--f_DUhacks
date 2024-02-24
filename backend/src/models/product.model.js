import mongoose, { Schema } from "mongoose";
import {Supplier} from "./supplier.model.js"


const supplyChainSchema = new mongoose.Schema(
  {
    title: String,
    description: String
  }

);

const categoriesEnum = ["Electronics", "Clothing", "Food&Beverages", "Home", "Beauty", "Books", "Sports", "Toys"];

const productSchema = new Schema(
  {
    supplyChain: {
      type: supplyChainSchema, // Reference to the supplyChainSchema
    },
    productImage: {
      type: String, //cloudinary url
      required: true,
    },
    certification: {
      type: String, //cloudinary url
      required: true,
    },
    productLink: { 
      type: String,
      required: true
    },
    supplier:{
      type: Schema.Types.ObjectId,
      ref: Supplier,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    carbonFP: {
      type: Number,
      required: true,
    },
    averageRating: {
      type: Number,
      default: 0 // Default to 0
    },
    category: {
      type: String,
      enum: categoriesEnum,
      required: true
    }
  },
  { timestamps: true }
);


export const Product = mongoose.model("Product", productSchema);
