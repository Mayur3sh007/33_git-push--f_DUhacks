import {uploadOnServer} from '../middlewares/multer.middleware.js'
import { Router } from 'express'
import{
  createProduct,
  getAllProducts
} from '../controllers/product.controller.js';

const router = Router();

router.route("/createProduct").post(
  uploadOnServer.fields([ 
    {
      name: "productImage",
      maxCount: 1
    },
    {
      name: "certification",
      maxCount: 1
    }
  ]),
  createProduct
)

router.route("/getAllProducts").get(getAllProducts);

export default router;