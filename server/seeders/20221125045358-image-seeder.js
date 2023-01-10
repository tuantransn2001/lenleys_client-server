"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   title: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Images",
      [
        {
          id: 1,
          image_title: "ALEX 2.5 SEATER SOFA",
          image_src:
            "http://localhost:8080/img/imageList/imageList1669543933110-584247738.png",
          image_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          option_id: null,
          product_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          image_title: "BANTAM MIDNIGHT LEATHER OCCASIONAL CHAIR AND STOOL",
          image_src:
            "http://localhost:8080/img/imageList/imageList1669543933110-584247738.png",
          image_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          option_id: null,
          product_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          image_title: "BOUTIQUE ROYAL BLUE 3 SEATER SOFA",
          image_src:
            "http://localhost:8080/img/imageList/imageList1669543953385-520548364.png",
          image_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          option_id: null,
          product_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          image_title: "BOUTIQUE TEAL 2 SEATER SOFA",
          image_src:
            "http://localhost:8080/img/imageList/imageList1669543972680-94693546.png",
          image_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          option_id: null,
          product_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          image_title: "BOUTIQUE TEAL 3 SEATER SOFA",
          image_src:
            "http://localhost:8080/img/imageList/imageList1669543988947-747078912.png",
          image_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          option_id: null,
          product_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          image_title: "GRACE 2 SEATER SOFA",
          image_src:
            "http://localhost:8080/img/imageList/imageList1669544020949-727293147.png",
          image_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          option_id: null,
          product_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          image_title: "GRACE 3 SEATER SOFA",
          image_src:
            "http://localhost:8080/img/imageList/imageList1669544038636-46808369.png",
          image_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          option_id: null,
          product_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          image_title: "GRACE 3 SEATER SOFA",
          image_src:
            "http://localhost:8080/img/imageList/imageList1669544038636-46808369.png",
          image_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          option_id: null,
          product_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          image_title: "GRACE 3 SEATER SOFA",
          image_src:
            "http://localhost:8080/img/imageList/imageList1669544038636-46808369.png",
          image_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          option_id: null,
          product_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          image_title: "GRACE 3 SEATER SOFA",
          image_src:
            "http://localhost:8080/img/imageList/imageList1669544038636-46808369.png",
          image_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          option_id: null,
          product_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          image_title: "haza",
          image_description: "ALEX 2.5 SEATER SOFA - options -wood",
          product_id: 1,
          option_id: 1,
          image_src:
            "http://localhost:8080/img/imageList/imageList1669699636763-111856667.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          image_title: "frost",
          image_description: "ALEX 2.5 SEATER SOFA - options -wood",
          product_id: 1,
          option_id: 1,
          image_src:
            "http://localhost:8080/img/imageList/imageList1669699761500-763490703.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          image_title: "mist",
          image_description: "ALEX 2.5 SEATER SOFA - options -wood",
          product_id: 1,
          option_id: 1,
          image_src:
            "http://localhost:8080/img/imageList/imageList1669699810442-706814496.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          image_title: "ALEX 2.5 SEATER SOFA - Thumbnails - 1",
          image_description: "ALEX 2.5 SEATER SOFA - Thumbnails - 1",
          product_id: 1,
          option_id: null,
          image_src:
            "http://localhost:8080/img/imageList/imageList1669869359244-571670324.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          image_title: "ALEX 2.5 SEATER SOFA - Thumbnails - 2",
          image_description: "ALEX 2.5 SEATER SOFA - Thumbnails - 2",
          product_id: 1,
          option_id: null,
          image_src:
            "http://localhost:8080/img/imageList/imageList1669869406380-647538311.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          image_title: "ALEX 2.5 SEATER SOFA - Thumbnails - 3",
          image_description: "ALEX 2.5 SEATER SOFA - Thumbnails - 3",
          product_id: 1,
          option_id: null,
          image_src:
            "http://localhost:8080/img/imageList/imageList1669869417013-864931693.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
