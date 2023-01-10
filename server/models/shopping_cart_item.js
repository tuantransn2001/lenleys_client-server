"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shopping_cart_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shopping_cart_item.belongsTo(models.Shopping_cart, {
        foreignKey: "shopping_cart_id",
      });
    }
  }
  Shopping_cart_item.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      product_id: {
        type: DataTypes.INTEGER,
      },
      shopping_cart_id: {
        type: DataTypes.INTEGER,
      },
      unit_price: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Shopping_cart_item",
    }
  );
  return Shopping_cart_item;
};
