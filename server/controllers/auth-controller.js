const { User } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
class AuthController {
  static async register(req, res) {
    try {
      const {
        firstName,
        lastName,
        type,
        address,
        email,
        phoneNumber,
        password,
      } = req.body;
      // * 1: Check user is already exists or not
      const oldUser = await User.findOne({
        where: {
          email,
        },
      });

      if (oldUser) {
        res.status(404).send(`User is already exists!`);
      } else {
        const newUser = {
          firstName,
          lastName,
          type,
          address,
          email,
          phoneNumber,
          password,
        };
        await User.create(newUser);
        res.status(200).send(newUser);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      // * Check user'email,password is correct or not
      const foundUser = await User.findOne({
        where: {
          email,
          password,
        },
      });
      if (!foundUser) {
        // ! If in-correct -> send message
        res.status(404).send({
          status: "error",
          message: "Email and or Password is wrong! Please try again!",
        });
      } else {
        // ? If correct ->  create token -> send to client side
        const jwtSecretKey = process.env.JWT_TOKEN_SECRET_KEY;
        const jwtRefreshSecretKey = process.env.JWT_REFRESH_TOKEN_SECRET_KEY;
        const tokenData = {
          id: foundUser.id,
          email: foundUser.email,
        };
        const token = jwt.sign(tokenData.toString(), jwtSecretKey, {
          expiresIn: "7200000s",
        });
        const refreshToken = jwt.sign(
          tokenData.toString(),
          jwtRefreshSecretKey,
          {
            expiresIn: "7200000s",
          }
        );
        const currentUser = {
          id: foundUser.id,
          email: foundUser.email,
          token,
          refreshToken,
        };
        res.status(200).send({
          status: "success",
          data: currentUser,
        });
      }
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: err,
      });
    }
  }
  static async getUserDetailByAccessToken(req, res) {
    const { token } = req.headers;
    const { id } = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY);
    const foundUser = await User.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(foundUser);
  }
  static async forgotPassword(req, res) {}
  static async resetPassword(req, res) {}
}

module.exports = AuthController;
