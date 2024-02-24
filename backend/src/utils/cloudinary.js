import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; //comes with nodejs

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async function(localFilePath) {
  try {
    if(!localFilePath) return null;

    //uploading the file
    const response = await cloudinary.uploader.upload(
      localFilePath,
      {
        folder: "assets",
        resource_type: "auto"
      }
    )
    
    //file has been uploaded
    fs.unlinkSync(localFilePath)
    return response;

  } catch (error) {
    fs.unlinkSync(localFilePath) 
    return null;
  }
}

const deleteOnCloudinary = async function(folderName, cloudPath){
  try {
    const fullPublicId = `${folderName}/${cloudPath.match(/\/([^/]+)\.jpg$/)?.[1]}`;
    
    const response = await cloudinary.uploader.destroy(
      fullPublicId
    )

    return response;
  } catch (error) {
    console.log("Error while Deleting cloudinary file: ",error)
    return null;
  }
}


export {uploadOnCloudinary, deleteOnCloudinary}