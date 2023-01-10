const express = require("express");
const authRouter = express.Router();
const { authenticate } = require("../middlewares/auth/authenticate");
const AuthController = require("../controllers/auth-controller");

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);
authRouter.post(
  "/auth_by_access_token",
  authenticate,
  AuthController.getUserDetailByAccessToken
);
module.exports = { authRouter };
