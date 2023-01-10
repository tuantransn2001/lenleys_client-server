"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          id: 1,
          name: "Sofas & Chairs",
          title: "THE KEY TO COMFORT? START WITH AN EXCEPTIONAL SOFA.",
          description:
            "Every living space is different, whether you want to lounge, entertain or curl up. With our range of sofas and chairs, you’re certain to find the right style for the heart of your home, from traditional designs to modern modulars.",
          imgSrc:
            "http://localhost:8080/img/category/category1669304964707-372958998.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Beds & Bedrooms",
          title: "TREAT YOURSELF TO A BETTER NIGHT’S SLEEP, FOREVER.",
          description:
            "Don’t compromise when it comes to your comfort at night, and choose the right bed and bedroom furniture to turn a bedroom into your own personal sanctuary, <break></break> At Lenleys Home we have a beautiful, extensive selection of beds and bedroom furniture on display in our showrooms ranging from traditional style to modern contemporary designs.",

          imgSrc:
            "http://localhost:8080/img/category/category1669305026076-776813121.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Dining",
          title: "IT’S TIME TO DINE OUT ON YOUR HOME’S NEW LOOK.",
          description:
            "At Lenleys Home we have a beautiful, extensive selection of beds and bedroom furniture on display in our showrooms ranging from traditional style to modern contemporary designs.",

          imgSrc:
            "http://localhost:8080/img/category/category1669305068215-46905349.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Living Room",
          title: "BRING YOUR LIVING ROOM TO LIFE.",
          description:
            "Our range of living room furniture will allow you to build the perfect room to your exacting tastes with minimal fuss.",

          imgSrc:
            "http://localhost:8080/img/category/category1669305096693-859929692.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   id: 5,
        //   name: "Flooring",
        //   title: "",
        //   description: "",
        //   imgSrc:
        //     "http://localhost:8080/img/category/category1669305130058-556041881.png",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   id: 6,
        //   name: "Interiors",
        //   title: "",
        //   description: "",
        //   imgSrc:
        //     "http://localhost:8080/img/category/category1669305162628-118861949.png",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   id: 7,
        //   name: "Accessories",
        //   title: "",
        //   description: "",
        //   imgSrc:
        //     "http://localhost:8080/img/category/category1669305186743-234173736.png",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("categories", null, {});
  },
};
