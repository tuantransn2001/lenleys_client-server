const express = require("express");
const rootRouter = express.Router();
const { userRouter } = require("./user-router");
const { categoryRouter } = require("./category-router");
const { productRouter } = require("./product-router");
const { imageRouter } = require("./image-router");
const { optionRouter } = require("./option-router");
const { oderDetailRouter } = require("./oder_detail-router");
const { shoppingCartRouter } = require("./shopping_cart-router");
const { authRouter } = require("./auth-router");

// ? User
rootRouter.use("/user", userRouter);
// ? Authenticate && Authorize
rootRouter.use("/auth", authRouter);
// ? Category
rootRouter.use("/category", categoryRouter);
// ? Product
rootRouter.use("/product", productRouter);
// ? Image
rootRouter.use("/img", imageRouter);
// ? Options
rootRouter.use("/option", optionRouter);
// ? Order Detail
rootRouter.use("/order-detail", oderDetailRouter);
// ? Shopping cart
rootRouter.use("/shopping-cart", shoppingCartRouter);
module.exports = { rootRouter };
