"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shopping_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shopping_cart.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      Shopping_cart.hasMany(models.Shopping_cart_item, {
        foreignKey: "shopping_cart_id",
      });
    }
  }
  Shopping_cart.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Shopping_cart",
    }
  );
  return Shopping_cart;
};
