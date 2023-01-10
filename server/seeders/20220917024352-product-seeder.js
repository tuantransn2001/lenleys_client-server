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
      "products",

      [
        {
          id: 1,
          product_name: "ALEX 2.5 SEATER SOFA",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "317900",
          product_imgSrc:
            "http://localhost:8080/img/imageList/imageList1669543933110-584247738.png",
          product_category: "Sofas & Chairs",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          product_name: "BANTAM MIDNIGHT LEATHER OCCASIONAL CHAIR AND STOOL",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "317900",
          product_imgSrc:
            "http://localhost:8080/img/imageList/imageList1669543933110-584247738.png",
          product_category: "Sofas & Chairs",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          product_name: "BOUTIQUE ROYAL BLUE 3 SEATER SOFA",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "317900",
          product_imgSrc:
            "http://localhost:8080/img/imageList/imageList1669543953385-520548364.png",
          product_category: "Sofas & Chairs",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          product_name: "BOUTIQUE TEAL 2 SEATER SOFA",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "317900",
          product_imgSrc:
            "http://localhost:8080/img/imageList/imageList1669543972680-94693546.png",
          product_category: "Sofas & Chairs",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          product_name: "BOUTIQUE TEAL 3 SEATER SOFA",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "317900",
          product_imgSrc:
            "http://localhost:8080/img/imageList/imageList1669543988947-747078912.png",
          product_category: "Sofas & Chairs",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          product_name: "GRACE 2 SEATER SOFA",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "317900",
          product_imgSrc:
            "http://localhost:8080/img/imageList/imageList1669544020949-727293147.png",
          product_category: "Sofas & Chairs",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          product_name: "GRACE 3 SEATER SOFA",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "317900",
          product_imgSrc:
            "http://localhost:8080/img/imageList/imageList1669544038636-46808369.png",
          product_category: "Sofas & Chairs",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          product_name: "APOLLO 2 SEATER SOFA",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "115900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669908722830-298667486.png",
          product_category: "Sofas & Chairs",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          product_name: "ANTONIO ARMCHAIR",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "78900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669908782262-542516781.png",
          product_category: "Sofas & Chairs",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          product_name: "BOSTON 2+2 CHEST OF DRAWERS",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "105900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669910262418-572700420.png",
          product_category: "Beds & Bedrooms",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          product_name: "BOSTON 3+4 CHEST OF DRAWERS",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "105900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669910276979-660461628.png",
          product_category: "Beds & Bedrooms",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          product_name: "BOSTON ALL HANGING WARDROBE",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "105900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669910290151-961032725.png",
          product_category: "Beds & Bedrooms",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          product_name: "BOSTON BEDROOM STOOL",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "105900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669910302756-138111649.png",
          product_category: "Beds & Bedrooms",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          product_name: "BOSTON BEDSIDE CHEST",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "105900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669910322589-30834415.png",
          product_category: "Beds & Bedrooms",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          product_name: "BOSTON BLANKET CHEST",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "105900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669910342509-59299728.png",
          product_category: "Beds & Bedrooms",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          product_name: "BOSTON WALL MIRROR",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "105900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669910371158-526236481.png",
          product_category: "Beds & Bedrooms",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          product_name: "BOSTON WARDROBE WITH 1 DRAWER",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "105900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669910386631-613553653.png",
          product_category: "Beds & Bedrooms",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          product_name: "BUTTON ACCENT CHAIR",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "105900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669910400377-392138183.png",
          product_category: "Beds & Bedrooms",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          product_name: "AMY DINING CHAIR",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "23900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949072928-476665383.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          product_name: "ARMIN DINING CHAIR",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "23900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949086016-402751634.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          product_name: "AUDREY CHAIR",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "23900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949100490-101595882.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          product_name: "AVIATOR SIDEBOARD - BRASS",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "23900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949127288-494844796.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          product_name: "AVIATOR SIDEBOARD - SILVER",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "23900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949151031-242257637.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          product_name: "BELLA DINING CHAIR",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "23900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949163510-55978335.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          product_name: "BERGEN DINING TABLE",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "23900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949175470-620184980.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 26,
          product_name: "BERGEN LOWBOARD",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "23900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949187268-132620536.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          product_name: "BERGEN SIDEBOARD",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "23900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949198761-565885566.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          product_name: "BROOKLYN 210CM SIDEBOARD",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "23900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949592839-146284292.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 29,
          product_name: "BROOKLYN BOOKCASE",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "123900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949652366-792155921.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 30,
          product_name: "BROOKLYN COFFEE TABLE",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "123900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949666014-742864885.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 31,
          product_name: "BROOKLYN OCCASIONAL TABLE",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "123900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949685748-981506415.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 32,
          product_name: "CAGE COFFEE TABLE",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "123900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949697672-871031118.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 33,
          product_name: "CAGE LAMP TABLE",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "123900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949710674-616447296.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 34,
          product_name: "CALLIGARIS GIRO TROLLEY WITH CASTORS",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "123900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949723838-925281607.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 35,
          product_name: "CALLIGARIS THIN COFFEE TABLE",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "123900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949737520-126948871.png",
          product_category: "Dining",
          product_orderID: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 36,
          product_name: "CALLIGARIS THIN SIDE TABLE",
          product_description:
            "Crafted from cotton twill and spotlighted by its simple tonal embroidered logo front and centre with an adjustable tab at the back. Team yours with your best off-duty athleisurewear, for days spent in the sun.",
          product_price: "123900",
          product_imgSrc:
            "http://localhost:8080/img/product/product1669949750702-448345511.png",
          product_category: "Dining",
          product_orderID: null,
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
