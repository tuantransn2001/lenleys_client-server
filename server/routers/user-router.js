const express = require("express");
const userRouter = express.Router();

const UserControllers = require("../controllers/user-controllers");
userRouter.get("/", UserControllers.getUserList);
userRouter.get("/:id", UserControllers.getUserById);
userRouter.delete("/:id", UserControllers.deleteUserByID);

module.exports = {
  userRouter,
};
