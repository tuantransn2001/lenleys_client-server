"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(models.Option, {
        foreignKey: "option_id",
      });
    }
  }
  Image.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      option_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      product_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      image_title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image_description: {
        type: DataTypes.TEXT,
      },
      image_src: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Image",
    }
  );
  return Image;
};
