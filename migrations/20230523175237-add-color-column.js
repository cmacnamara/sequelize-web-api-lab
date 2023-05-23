'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add column:
    await queryInterface.addColumn('Guitars', 'color', { type: Sequelize.STRING })
  },
  async down(queryInterface, Sequelize) {
    // Remove column:
    await queryInterface.removeColumn('Guitars', 'color')
  }
};