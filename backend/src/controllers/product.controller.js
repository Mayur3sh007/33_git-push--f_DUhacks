import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";  
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import {ApiResponse} from "../utils/ApiResponse.js"
import { Product } from "../models/product.model.js";


/*
productLink
title
description
productImage
certification
category
supplier
carbonFP
*/

const createProduct = asyncHandler(async (req, res) => {
  
  const { 
    productLink,
    title,
    description,
    category,
    supplier,
    carbonFP} = req.body;

  const productImageLocalPath = req.file?.productImage[0]?.path;
  const certificationLocalPath = req.file?.certification[0]?.path;


  if(!productImageLocalPath) throw new ApiError(400, "product Image is missing")
  if(!certificationLocalPath) throw new ApiError(400, "certification file is missing")
 
  const productImage = await uploadOnCloudinary(productImageLocalPath);
  if(!productImage) throw new ApiError(400, "product image didnt get uploaded on the cloud")

  const certification = await uploadOnCloudinary(certificationLocalPath);
  if(!certification) throw new ApiError(400, "certification file didnt get uploaded on the cloud")


  
  const product = await Product.create({
    title,
    description,
    brand,
    productImage: productImage?.url || "",
    certification: certification?.url || "",
    supplyChain: null,
    productLink,
    category,
    supplier,
    carbonFP
  });


  const createdProduct = await Product.findById(product._id);

  if (!createdProduct)
    throw new ApiError(500, "something went wrong while creating the product");

  return res
  .status(201)
  .json(new ApiResponse(201, createdProduct, "Product added successfully"));
});



const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({}).populate('supplier');
    return res
    .status(201)
    .json(new ApiResponse(201, products, "Products fetched  successfully"))
  } catch (error) {
    res.status(500).json({ message: "some error while fetching the products" });
  }

})


export {
  createProduct,
  getAllProducts
}