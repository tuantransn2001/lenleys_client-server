const express = require("express");
const ImageController = require("../controllers/image-controller");
const { uploadImg } = require("../middlewares/upload/upload-img");
const imageRouter = express.Router();
imageRouter.get("/", ImageController.getImgList);
imageRouter.get("/:id", ImageController.deleteImgByID);
imageRouter.post(
  "/upload",
  uploadImg("imageList"),
  ImageController.uploadSingleImg
);
module.exports = { imageRouter };
