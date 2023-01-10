"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Images", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      option_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      product_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      image_title: {
        type: Sequelize.STRING,
      },
      image_description: {
        type: Sequelize.TEXT,
      },
      image_src: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Images");
  },
};
