const { User } = require("../models");

class UserControllers {
  static async getUserList(req, res) {
    try {
      const userList = await User.findAll();
      res.status(200).send(userList);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;

      const foundUser = await User.findOne({
        where: {
          id,
        },
      });

      if (foundUser) {
        res.status(200).send(foundUser);
      } else {
        res.status(404).send({
          status: "error",
          data: "User not found!",
        });
      }
    } catch (err) {
      res.status(500).send({
        status: "error",
        message: err,
      });
    }
  }

  static async deleteUserByID(req, res) {
    try {
      const { id } = req.params;
      const foundUser = await User.findOne({
        where: {
          id,
        },
      });
      if (foundUser) {
        await User.destroy({
          where: {
            id,
          },
        });
        const userListUpdate = await User.findAll();
        res
          .status(201)
          .send(
            `Delete success user with id ${id} - User list update - ${JSON.stringify(
              userListUpdate
            )} `
          );
      } else {
        res.status(404).send("User Not Found");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = UserControllers;
