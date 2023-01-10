"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SubCategory.belongsTo(models.Category, {
        foreignKey: "id",
        as: "sub-nav",
      });
    }
  }
  SubCategory.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      imgSrc: DataTypes.STRING,
      name: DataTypes.STRING,
      categoryID: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "SubCategory",
    }
  );
  return SubCategory;
};
