import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken"


export const verifyJWT = asyncHandler( async(req, _, next) => {
  try {
    const token = req.cookies?.accessToken;
  
    if(!token) throw new ApiError(401, "Access token does not exist")
  
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
  
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
  
    if(!user) throw new ApiError(401, "Invalid Access token");
    
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "invalid accessToken or no cookies found");
  }
})