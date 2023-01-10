"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Option.belongsTo(models.Product, {
        foreignKey: "product_id",
      });
      Option.hasMany(models.Image, {
        foreignKey: "option_id",
      });
    }
  }
  Option.init(
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
      option_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      option_description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Option",
    }
  );
  return Option;
};
