const express = require("express");
const ProductController = require("../controllers/product-controller");
const { uploadImg } = require("../middlewares/upload/upload-img");
const productRouter = express.Router();
productRouter.get("/", ProductController.getProductList);
productRouter.get("/by_id/:id", ProductController.getProductById);
productRouter.get(
  "/by_category_name/:name",
  ProductController.getCategoryProductListByCategoryName
);
productRouter.post("/", ProductController.createProduct);
productRouter.post(
  "/upload/img",
  uploadImg("product"),
  ProductController.createProductWithImgUpload
);
productRouter.delete("/:id", ProductController.deleteProductById);
module.exports = { productRouter };
