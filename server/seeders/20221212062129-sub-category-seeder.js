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
      "subCategories",
      [
        {
          id: 1,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/03/Tokyo-2-Seater.jpg",
          name: "FABRIC SOFAS",
          categoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/02/6493-1024x1024.jpg",
          name: "LEATHER SOFAS",
          categoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/03/Cosy-Collection-Poppy-sofabed_1000x1000.jpg",
          name: "SOFA BEDS",
          categoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2021/10/1161-1024x1024.jpg",
          name: "CHAIRS",
          categoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 5,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/03/Gardenia-divan-set.jpg",
          name: "DIVAN BEDS",
          categoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/03/Gardenia-Mattress.jpg",
          name: "MATTRESSES",
          categoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/03/atlas-1.jpg",
          name: "BEDSTEADS",
          categoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2021/10/1161-1024x1024.jpg",
          name: "CHAIRS",
          categoryID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 9,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/03/Multiflex-ET634-6343.jpg",
          name: "DINING TABLES",
          categoryID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/04/2643-Romana-dining-chair-2000_1000x1000.jpg",
          name: "DINING CHAIRS",
          categoryID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/03/37150RWB-Brooklyn-2dr-sideboard-2000_1000x1000.jpg",
          name: "SIDEBOARDS",
          categoryID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/04/Remstone-barstool-2000_1000.jpg",
          name: "BARSTOOLS",
          categoryID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 13,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/04/2651-Romana-IR-TV-Unit-2000_1000x1000.jpg",
          name: "TV & MEDIA UNITS",
          categoryID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/03/37144-Brooklyn-coffee-table-2000_1000x1000.jpg",
          name: "COFFEE TABLES",
          categoryID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/04/Jaipur-MS04-Lamp-Table-2000_1000x1000.jpg",
          name: "LAMP TABLES",
          categoryID: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          imgSrc:
            "https://www.lenleys.co.uk/wp-content/uploads/2022/03/Terminal-Console-Table.jpg",
          name: "CONSOLE TABLES",
          categoryID: 4,
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
