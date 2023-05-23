'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Seed commands

    const date = new Date()

    await queryInterface.bulkInsert('Guitars', [{
      brand: 'Fender',
      model: 'Stratocaster',
      year: 1970, 
      createdAt: date,
      updatedAt: date,
      color: 'Sunburst'
    }])

  },

  async down (queryInterface, Sequelize) {
    // Commands to revert seed
    
    await queryInterface.bulkDelete('Guitars', null, {})

  }
};