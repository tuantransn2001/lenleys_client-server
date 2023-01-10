"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Option, {
        foreignKey: "product_id",
      });
    }
  }
  Product.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      product_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_price: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_imgSrc: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_category: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_orderID: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
