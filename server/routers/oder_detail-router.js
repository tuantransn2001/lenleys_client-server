const express = require("express");
const oderDetailRouter = express.Router();
const OrderDetailController = require("../controllers/order_detail-controller");

oderDetailRouter.get("/", OrderDetailController.getOderDetailList);

module.exports = { oderDetailRouter };
