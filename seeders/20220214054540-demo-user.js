'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      username: 'testuser',
      password: '$2a$10$f5cD/GjcOAy231MxBkjSqODnzFuTVpbDD9lAxG0i6AmHojh3l6tyu',
      firstname: 'Test',
      lastname: 'User',
      user_money: 10000.00
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
