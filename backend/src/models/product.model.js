import mongoose, { Schema } from "mongoose";

const supplyChainSchema = new mongoose.Schema(
  {
  title: String,
  description: String
  }

);

const productSchema = new Schema(
  {
    supplyChain: {
      type: supplyChainSchema, // Reference to the supplyChainSchema
      required: true
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
    brand:{
      type: String,
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
    }
    
  },
  { timestamps: true }
);


export const Product = mongoose.model("Product", productSchema);
