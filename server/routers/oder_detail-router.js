const express = require("express");
const oderDetailRouter = express.Router();
const OrderDetailController = require("../controllers/order_detail-controller");

oderDetailRouter.get("/", OrderDetailController.getOderDetailList);
oderDetailRouter.get(
  "/check_promo/:promo",
  OrderDetailController.validateUserPromo
);

module.exports = { oderDetailRouter };
