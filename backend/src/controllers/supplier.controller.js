//register supplier
//login
//logout

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";  
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import {ApiResponse} from "../utils/ApiResponse.js"
import { Supplier } from "../models/user.model.js";

//User section
const generateAccessandRefreshTokens = async(supplierId)=>{   
    try {
        const supplier = await Supplier.findById(supplierId)
  
        if(!supplier)
        {
            throw new ApiError(404,"supplier not found");
        }
        
        const accessToken = supplier.generateAccessTokenSupplier()
        const refreshToken = supplier.generateRefreshTokenSupplier()
        
        supplier.refreshToken = refreshToken                
        await supplier.save({ validateBeforeSave: false })  
        
        return {accessToken, refreshToken}           
  
    } catch (error) {
        throw new ApiError(500,"Something went wrong while generating Refresh and Access Tokens");
    }
}

const registerSupplier = asyncHandler(async (req,res) =>{   
  const {email,username,password} = req.body         

  if(
      [email,username,password].some((field)=>String(field).trim() === "")      
  )
  {
      throw new ApiError(400,"All fields are Required")
  }

  const existedUser = await Supplier.findOne({  //1st occurance 
      $or: [ {username} , {email} ]        // retuns doc that matches the 1st occurance of the given username or email
  })

  if(existedUser){
      throw new ApiError(409,"Supplier with same Supplier name or email exists")
  }

  
  const avatarLocalPath = req.file?.avatar[0]?.path;
  const authCertificationLocalPath = req.file?.authCertification[0]?.path;

  if(!avatarLocalPath)
  {
      throw new ApiError(400,"Avatar file is required")
  }
  if(!authCertificationLocalPath)
  {
      throw new ApiError(400,"Supplier needs to be authenticated")
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath)   
  if(!avatar)
  {
      throw new ApiError(400,"Avatar file is required")
  }

  const authCertification = await uploadOnCloudinary(authCertificationLocalPath)   
  if(!authCertification)
  {
      throw new ApiError(400,"authCertification file is required")
  }

  const supplier = await Supplier.create({
      avatar: avatar.url,
      authCertification: authCertification.url,      //we dont wanna send entire object(img) of avatar but just its url
      email,
      password,
      username: String(username).toLowerCase()
  })  
  
  const createdSupplier = await Supplier.findById(supplier._id).select(
      "-password -refreshToken"                     
  )


  if(!createdSupplier)    //not exists
  {
      throw new ApiError(500,"something went wrong while registering User")
  }

  return res.status(201).json(
    new ApiResponse(200,createdSupplier,"User Registered Successfully")
  )

})

const loginSupplier = asyncHandler(async(req,res)=>{

  const {email,password} = req.body
  
  if(!email)  
  {
      throw new ApiError(400,"Email is required")
  }

  const supplier = await Supplier.findOne({   
    email
  });

  if(!supplier)
  {
      throw new ApiError(404,"supplier doesnt Exist")
  }

  const isPasswordValid = await supplier.isPasswordCorrect(password) 
  if(!isPasswordValid)
  {
      throw new ApiError(401,"Invalid supplier Credentials")
  }

  const {accessTokenSupplier,refreshTokenSupplier} = await generateAccessandRefreshTokens(supplier._id) 
  const loggedInUser = await Supplier.findById(supplier._id).
  select("-password -refreshToken")

  const options = {
      httpOnly:true, 
      secure:true,
      expires: new Date(Date.now() + 1000 * 60 * 60), 
    };
  
  return res
  .status(200)
  .cookie("accessTokenSupplier",accessTokenSupplier,options)
  .cookie("refreshTokenSupplier",refreshTokenSupplier,options)
  .json(
      new ApiResponse(
          200,
          {
            supplier:loggedInUser,accessTokenSupplier,refreshTokenSupplier
          },
          "Supplier logged in Successfully"
      )
  )
})


//secured path
const logoutSupplier = asyncHandler(async(req,res)=>{  
  await Supplier.findByIdAndUpdate(
      req.supplier._id,   
      {
          $unset:{          
              token: 1 
          }
      },
      {
          new:true       
      },
  )

  const options = {   
      httpOnly:true,
      secure:true
  }

  return res
  .status(200)
  .clearCookie("accessToken",options)
  .clearCookie("refreshToken",options)
  .json(new ApiResponse(200,{},"supplier logged OUT"))
})

const getSupplierData = asyncHandler(async(req, res)=>{
    const supplier = req.supplier;

    if(!supplier){
        throw new ApiError(409,"supplier not logged in")
    }
    return res
    .status(200)
    .json(new ApiResponse(200,supplier,"User Data fetched Successfully"))

})


//Controllers Based on Problem Statement

export
{
  registerSupplier,
  loginSupplier,
  logoutSupplier,
  getSupplierData
}