import mongoose, { Schema } from 'mongoose'
import { Product } from './product.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"

const supplierSchema = new Schema(
  {
      username: {
          type: String,
          required: true,
          lowercase: true,
          unique: true,
          trim: true,
          index: true,
      },
      email: {
          type: String,
          required: true,
          lowercase: true,
          unique: true,
          trim: true,
      },
      password: {
          type: String,
          required: [true, 'Password is required']
      },
      avatar: {
          type: String, // cloudinary url
          required: true,
      },
      products:[
        {
          type: Schema.Types.ObjectId,
          ref: "Product"
        }
      ],
      token: {
          type: String
      },
      authCertification: {
        type: String, // cloudinary url
        required: true,
      },
  },
  { timestamps: true },
)

supplierSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    return next()
})

supplierSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

supplierSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};

supplierSchema.methods.generateRefreshToken = function () { //long term
    console.log(process.env.REFRESH_TOKEN_SECRET)
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
}
export const Supplier = mongoose.model("Supplier", supplierSchema)