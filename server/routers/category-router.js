const express = require("express");
const { uploadImg } = require("../middlewares/upload/upload-img");
const categoryRouter = express.Router();
const CategoryController = require("../controllers/category-controller");

categoryRouter.get("/", CategoryController.getCategoryList);
categoryRouter.get("/:id", CategoryController.getCategoryByID);
categoryRouter.post(
  "/",
  uploadImg("category"),
  CategoryController.createCategory
);
categoryRouter.get("/", CategoryController.getSubCategoryList);
categoryRouter.get("/:id", CategoryController.getSubCategoryByID);
module.exports = {
  categoryRouter,
};
