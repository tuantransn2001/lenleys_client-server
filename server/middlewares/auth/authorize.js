const { User } = require("../../models");
const authorize = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const authorizeArr = ["admin", "superadmin"];
    const foundUser = await User.findOne({
      where: {
        email,
        password,
      },
    });
    const foundUserType = foundUser.type;
    const isAdmin = authorizeArr.includes(foundUserType);
    if (isAdmin) {
      return next();
    } else {
      res.status(400).send("You are not Admin!!");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { authorize };
