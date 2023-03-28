'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_produk: {
        type: Sequelize.STRING
      },
      id_order: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      jumlah: {
        type: Sequelize.STRING
      },
      subtotal: {
        type: Sequelize.STRING
      },
      total_harga: {
        type: Sequelize.STRING
      },
      status_order: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};