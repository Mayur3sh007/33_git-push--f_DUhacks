import { User } from "../models/user.model.js"
import {Supplier} from "../models/supplier.model.js"
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken"


const verifyJWT = asyncHandler( async(req, _, next) => {
  try {
    const token = req.cookies?.accessToken;
  
    if(!token) throw new ApiError(401, " User is not logged in or Access token does not exist")
  
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
  
    const user = await User.findById(decodedToken?._id).select("-password -token")
  
    if(!user) throw new ApiError(401, "Invalid Access token");
    
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "invalid accessToken or no cookies found");
  }
})

const verifySupplier = asyncHandler( async(req, _, next) => {
  try {
    console.log(req.cookies)
    const token = req.cookies?.accessTokenSupplier;
  
    if(!token) throw new ApiError(401, "Supplier not logged in or Access token does not exist")
  
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    console.log(decodedToken)
    const supplier = await Supplier.findById(decodedToken?._id).select("-password -token")
  
    if(!supplier) throw new ApiError(401, "Invalid Access token");
    
    req.supplier = supplier;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "invalid accessToken or no cookies found");
  }
})

export {verifyJWT, verifySupplier};