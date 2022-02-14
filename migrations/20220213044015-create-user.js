'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('users', { 
       username: Sequelize.STRING,
       password: Sequelize.STRING,
       firtname: Sequelize.STRING,
       lastname: Sequelize.STRING,
       profile_pic: Sequelize.STRING,
       user_money: Sequelize.FLOAT,
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('user')
  }
};
