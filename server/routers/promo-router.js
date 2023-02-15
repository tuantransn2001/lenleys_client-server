const express = require("express");
const promoRouter = express.Router();
const PromoControllers = require("../controllers/promo-controller");
promoRouter.get("/", PromoControllers.getAllPromo);
promoRouter.get("/check/:code", PromoControllers.checkPromo);
module.exports = { promoRouter };
