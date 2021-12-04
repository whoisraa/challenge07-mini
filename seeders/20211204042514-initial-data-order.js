'use strict';

const faker = require('faker')

const orders = [...Array(100)].map( (review) => (
  {
    product_id: Math.floor(Math.random() * 100) + 1,
    user_id: Math.floor(Math.random() * 100) + 1,
    qty: Math.floor(Math.random() * 5) + 1,
    price: faker.commerce.price(),
    transaction_status: 'WAITING',
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Orders', orders, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Orders', null, {})
  }
};
