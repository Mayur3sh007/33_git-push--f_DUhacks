import mongoose, { Schema } from "mongoose";

const supplyChainSchema = new mongoose.Schema({
  title: String,
  description: String
});

const productSchema = new Schema(
  {
    supplyChain: [supplyChainSchema],
    productImage: {
      type: String, //cloudinary url
      required: true,
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
    Rating:{
        type:Number,
        required:true,
    },
    
  },
  { timestamps: true }
);


export const Product = mongoose.model("Product", productSchema);
