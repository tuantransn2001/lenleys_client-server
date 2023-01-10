const express = require("express");
const OptionController = require("../controllers/option-controller");
const optionRouter = express.Router();
optionRouter.get("/", OptionController.getOptionList);
optionRouter.post("/", OptionController.createOption);
module.exports = { optionRouter };
